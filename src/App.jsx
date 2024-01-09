import React from "react";
import { Routes, Route } from "react-router-dom";

import Resume from "./pages/Resume";
import Main from "./pages/Main";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="footer" element={<Footer />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
