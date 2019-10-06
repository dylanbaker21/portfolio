import React from "react";
import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";

const ContactPage = () => {
  return (
    <div id="contact-background">
      <h1 id="project" data-aos="zoom-in">
        Contact
      </h1>
      {/* title underline */}
      <div className="underline" data-aos="flip-right"></div>
      <div id="contact-container">
        <form id="contact-form" method="POST" data-netlify="true">
          <input
            className="form-input"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <br />
          <input
            className="form-input"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <br />
          <textarea
            className="form-input"
            placeholder="Message"
            type="text"
            name="message"
            rows="5"
            required
          />
          <br />
          <div data-netlify-recaptcha="true"></div>
          <input className="form-submit" type="submit" value="Send" />
        </form>
      </div>
      <a
        href="https://github.com/dylanbaker21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={githubIcon} alt="GitHub Logo" />
      </a>
      <a
        href="https://linkedin.com/in/dylanbaker21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icon" src={linkedinIcon} alt="LinkedIn Logo" />
      </a>
    </div>
  );
};

export default ContactPage;
