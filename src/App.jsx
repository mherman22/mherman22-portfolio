import React from "react";
import { Routes, Route } from "react-router-dom";

import Resume from "./pages/Resume";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
