import React from "react";
import ReactDOM from "react-dom/client";

import { Og1 } from "./og-1/Og1";
import { Og2 } from "./og-2/Og2";
import { Og3 } from "./og-3/Og3";
import { Og4 } from "./og-4/Og4";
import "./styles.css";

const App = () => (
  <div className="og-list">
    <div className="og-row">
      <span className="og-label">A =&gt;</span>
      <Og1 />
    </div>
    <div className="og-row">
      <span className="og-label">B =&gt;</span>
      <Og2 />
    </div>
    <div className="og-row">
      <span className="og-label">C =&gt;</span>
      <Og3 />
    </div>
    <div className="og-row">
      <span className="og-label">D =&gt;</span>
      <Og4 />
    </div>
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
