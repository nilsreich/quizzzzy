import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
import { install } from "@twind/core";
import config from "./twind.config";
// activate twind - must be called at least once
install(config);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
