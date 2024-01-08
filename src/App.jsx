import React from "react";

import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio.jsx";

import "./styles.css";

const siteProps = {
  name: "MUHEREZA HERMAN",
  title: "Full Stack Software Developer",
  email: "hermanmuhereza22@gmail.com",
  gitHub: "mherman22",
  instagram: "kuntakinte",
  linkedIn: "herman-muhereza-10824315a",
  medium: "",
  twitter: "@kuntakinte_ug",
  youTube: "Herman_Muhereza",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
