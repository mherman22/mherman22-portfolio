import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/mherman22">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
