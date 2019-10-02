import React from "react";
import logo from "../images/logo-white.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={logo} className="landing-logo" alt="logo" data-aos="zoom-out" />
      <div className="arrow"></div>
    </div>
  );
};

export default LandingPage;
