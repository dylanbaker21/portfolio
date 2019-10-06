import React, { Component } from "react";
import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends Component {
  state = { name: "", email: "", message: "" };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div id="contact-background">
        <h1 id="project" data-aos="zoom-in">
          Contact
        </h1>
        {/* title underline */}
        <div className="underline" data-aos="flip-right"></div>
        <div id="contact-container">
          <form
            id="contact-form"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            name="contact"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className="form-input"
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.name}
              required
            />
            <br />
            <input
              className="form-input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.email}
              required
            />
            <br />
            <textarea
              className="form-input"
              placeholder="Message"
              type="text"
              name="message"
              rows="5"
              onChange={this.handleChange}
              value={this.message}
              required
            />
            <br />
            <div data-netlify-recaptcha="true"></div>
            <button className="form-submit" type="submit">
              Send
            </button>
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
  }
}

export default ContactPage;
