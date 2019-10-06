import React from "react";
import PropTypes from "prop-types";

const ProjectTile = props => {
  return (
    <div className="project-tile">
      <h2>VSCO Viewer</h2>
      <p>
        Web scraping tool used to display full-resolution social media profile
        pictures
      </p>
      <img
        className="project-images"
        src={props.thumbnail}
        alt={`${props.title} preview`}
      />
      <button
        onClick={function() {
          window.open(`${props.webLink}`, "_blank");
        }}
      >
        Visit Site
      </button>
      <button
        onClick={function() {
          window.open(`${props.gitLink}`, "_blank");
        }}
      >
        View Code
      </button>
    </div>
  );
};

// PropTypes
ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
  webLink: PropTypes.string.isRequired
};

export default ProjectTile;
