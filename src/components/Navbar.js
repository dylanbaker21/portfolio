import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import whiteLogo from "../images/white-logo.png";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor=".content"
      data-aos-anchor-placement="top-top"
      className="nav-container"
    >
      <nav className="navbar">
        <a href="#home" style={{ height: "30px" }}>
          <img
            border="0"
            alt="White logo"
            src={whiteLogo}
            width="30"
            height="30"
          />
        </a>
        <div id="nav-filler" />
        <a href="#home">About</a>
        <a href="#news">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <ScrollIndicator />
    </div>
  );
};

export default Navbar;
