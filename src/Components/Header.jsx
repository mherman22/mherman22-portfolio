import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "#00473f",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <Link to="/#home">Home</Link>
      <Link to="/#about" reloadDocument>About</Link>
      <Link to="/#portfolio" reloadDocument>Portfolio</Link>
      <Link to="/#footer" reloadDocument>Contact</Link>
      <Link to="/resume" target="_blank" rel="noopener noreferrer">My Resume</Link>
      <a href="https://hermanmuhereza.blogspot.com/" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
    </div>
  );
};

export default Header;
