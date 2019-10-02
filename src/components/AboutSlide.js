import React from "react";
import PropTypes from "prop-types";

const AboutSlide = props => {
  return (
    <div
      className="icon-subcontainer"
      data-aos={props.aos}
      data-aos-anchor-placement="top-center"
    >
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h2 className="subheader-accent">{props.subtitle}</h2>
      <p className="content">{props.content}</p>
    </div>
  );
};

// PropTypes
AboutSlide.propTypes = {
  aos: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default AboutSlide;
