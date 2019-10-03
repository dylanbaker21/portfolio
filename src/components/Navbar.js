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
      <a href="#about-container">
        <span
          id="about"
          data-aos="about-highlight"
          data-aos-mirror="true"
          data-aos-anchor="#about-container"
        >
          {" "}
          About
        </span>
      </a>
      <a href="#projects-container">
        <span
          id="projects"
          data-aos="projects-highlight"
          data-aos-mirror="true"
          data-aos-anchor="#projects-container"
        >
          {" "}
          Projects
        </span>
      </a>
      <a href="#contact-container">
        <span
          id="contact"
          data-aos="contact-highlight"
          data-aos-anchor="#contact-container"
        >
          Contact
        </span>
      </a>
      <ScrollIndicator />
    </div>
  );
};

export default Navbar;
