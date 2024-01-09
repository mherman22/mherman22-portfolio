import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Resume from "./pages/Resume";
import Main from "./pages/Main";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const { pathname, hash, key } = useLocation();

  //fixes scroll to specific section of the main page
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
