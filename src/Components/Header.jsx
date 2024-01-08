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
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
      <Link to="/resume" target="_blank" rel="noopener noreferrer">
        My Resume
      </Link>
      <a href="https://hermanmuhereza.blogspot.com/" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
    </div>
  );
};

export default Header;
