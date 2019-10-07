import React, { Component } from "react";
import ProjectTile from "./ProjectTile";
import vscoImg from "../images/vsco-viewer-screenshot.png";
import hashifyImg from "../images/hashify-screenshot.png";
class ProjectPage extends Component {
  state = {};
  render() {
    return (
      <div id="project-background">
        <h1 id="project" data-aos="zoom-in">
          Projects
        </h1>
        {/* title underline */}
        <div className="underline" data-aos="flip-right"></div>
        <div id="projects-container">
          <ProjectTile
            title="Hashify"
            header="Web application utilizing smart contracts to submit hashes to the Ethereum blockchain for verification and permanence"
            thumbnail={hashifyImg}
            webLink="https://hashify.tools"
            gitLink="https://github.com/dylanbaker21/hashify"
          />
          <ProjectTile
            title="VSCO Viewer"
            header="Web scraping tool used to display full-resolution social media
      profile pictures"
            thumbnail={vscoImg}
            webLink="https://www.vscoviewer.com"
            gitLink="https://github.com/dylanbaker21/pfp-viewer"
          />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
