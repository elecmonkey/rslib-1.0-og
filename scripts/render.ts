import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { chromium, type Browser } from "playwright";

const WIDTH = 2048;
const HEIGHT = 576;
const HOST = "127.0.0.1";
const PORT = 4173;
const URL = `http://${HOST}:${PORT}/`;

const getRenders = async () => {
  const indexSource = await readFile(path.resolve("src/index.tsx"), "utf8");
  const ogList = indexSource.match(
    /<div\s+className=["']og-list["']>([\s\S]*?)<\/div>/,
  );

  if (!ogList) {
    throw new Error('Could not find <div className="og-list"> in src/index.tsx');
  }

  const ogNumbers = Array.from(
    ogList[1].matchAll(/<Og(\d+)\s*\/>/g),
    (match) => match[1],
  );

  if (ogNumbers.length === 0) {
    throw new Error("No <Og<number> /> tags found inside .og-list");
  }

  return ogNumbers.map((ogNumber) => ({
    selector: `#rslib-og-${ogNumber}`,
    outputPath: path.resolve(`rslib-og-${ogNumber}.png`),
  }));
};

const renders = await getRenders();

const run = (command: string, args: string[]): Promise<void> =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      env: process.env,
    });

    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          `${command} ${args.join(" ")} failed (${signal ?? `exit ${code}`})`,
        ),
      );
    });
  });

const waitForServer = async (): Promise<void> => {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(URL);
      if (response.ok) return;
    } catch {
      // The preview server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  throw new Error(`Preview server did not become ready at ${URL}`);
};

const readPngSize = async (
  filePath: string,
): Promise<{ width: number; height: number }> => {
  const png = await readFile(filePath);
  const signature = png.subarray(1, 4).toString("ascii");

  if (signature !== "PNG") {
    throw new Error(`Rendered file is not a PNG: ${filePath}`);
  }

  return {
    width: png.readUInt32BE(16),
    height: png.readUInt32BE(20),
  };
};

await run("pnpm", ["run", "build"]);

const preview = spawn(
  "pnpm",
  ["exec", "rsbuild", "preview", "--host", HOST, "--port", String(PORT)],
  {
    stdio: "inherit",
    env: process.env,
  },
);

let browser: Browser | undefined;

try {
  await waitForServer();

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
  });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  for (const render of renders) {
    const canvas = page.locator(render.selector);
    await canvas.waitFor({ state: "visible" });
    await canvas.screenshot({
      path: render.outputPath,
      animations: "disabled",
    });

    const size = await readPngSize(render.outputPath);
    if (size.width !== WIDTH || size.height !== HEIGHT) {
      throw new Error(
        `Expected ${WIDTH}x${HEIGHT}, rendered ${size.width}x${size.height}`,
      );
    }

    console.log(`Rendered ${size.width}x${size.height}: ${render.outputPath}`);
  }
} finally {
  await browser?.close();
  preview.kill("SIGTERM");
}
