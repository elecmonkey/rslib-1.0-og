import React from "react";
import ReactDOM from "react-dom/client";

import { OgLatestAugust } from "./og-latest-august/OgLatestAugust";
import { OgLatestSeptember } from "./og-latest-september/OgLatestSeptember";
import { OgLatestSeptember1200 } from "./og-latest-september-1200/OgLatestSeptember1200";
import "./styles.css";

const App = () => (
  <div className="og-list">
    <OgLatestAugust />
    <OgLatestSeptember />
    <OgLatestSeptember1200 />
  </div>
);

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
