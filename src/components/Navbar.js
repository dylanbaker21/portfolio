import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import whiteLogo from "../images/white-logo.png";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor=".content"
      data-aos-anchor-placement="top-top"
      className="navbar"
    >
      <a href="/#landing-page" style={{ height: "30px" }}>
        <img
          border="0"
          alt="White logo"
          src={whiteLogo}
          width="30"
          height="30"
        />
      </a>
      <div id="nav-filler" />
      <a
        id="about"
        href="#about-container"
        data-aos="about-highlight"
        data-aos-anchor="#about-container"
      >
        About
      </a>
      <a
        id="projects"
        href="#projects"
        data-aos="projects-highlight"
        data-aos-anchor=".projects-container"
      >
        Projects
      </a>
      <a
        id="contact"
        href="#contact"
        data-aos="contact-highlight"
        data-aos-anchor=".contact-container"
      >
        Contact
      </a>
      <ScrollIndicator />
    </div>
  );
};

export default Navbar;
