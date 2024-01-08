import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Resume from "./pages/Resume.jsx";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </BRouter>
);
