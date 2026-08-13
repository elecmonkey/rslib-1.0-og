import rslibLogo from "../../asset/rslib-logo.svg";
import "./Og2.css";

export const Og2 = () => (
  <main id="rslib-og-2" className="og-canvas og2">
    <section className="og2-copy">
      <p className="og2-date">August, 2026</p>
      <h1 className="og2-title">
        <span className="og2-product">Rslib</span>
        <span className="og2-version">1.0</span>
      </h1>
      <p className="og2-tagline">Rsbuild-based Library Development Tool</p>
    </section>

    <section className="og2-stage" aria-label="Rslib modular library illustration">
      <img className="og2-logo" src={rslibLogo} alt="Rslib mascot" />
    </section>
  </main>
);
