import React from "react";
import ReactDOM from "react-dom/client";

import { Og9 } from "./og-9/Og9";
import { Og10 } from "./og-10/Og10";
import { Og11 } from "./og-11/Og11";
import "./styles.css";

const App = () => (
  <div className="og-list">
    <Og9 />
    <Og10 />
    <Og11 />
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
