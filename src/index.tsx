import React from "react";
import ReactDOM from "react-dom/client";

import { Og1 } from "./og-1/Og1";
import { Og2 } from "./og-2/Og2";
import { Og3 } from "./og-3/Og3";
import "./styles.css";

const App = () => (
  <div className="og-list">
    <Og1 />
    <Og2 />
    <Og3 />
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
