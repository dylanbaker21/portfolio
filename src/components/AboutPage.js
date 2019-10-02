import React from "react";
import clean from "../images/clean.svg";
import performant from "../images/performant.svg";
import responsive from "../images/responsive.svg";
import lightbulb from "../images/lightbulb.svg";
import AboutSlide from "./AboutSlide";

const AboutPage = () => {
  return (
    <div className="about-background">
      <div className="about-container">
        {/* title */}
        <h1 className="about" data-aos="fade-down">
          About
        </h1>
        {/* title underline */}
        <div className="underline" data-aos="flip-right"></div>
        {/* bio */}
        <p className="content">
          <span className="accent">Hi</span>, my name is Dylan Baker and I'm a
          <span className="accent"> full stack web developer</span> with a
          passion for <span className="accent">blockchain</span> technology. I
          take pride in creating clean, intuitive, responsive and performant web
          apps.
        </p>
        <div className="icon-container">
          {/* clean slide */}
          <AboutSlide
            aos={"fade-right"}
            subtitle={"Clean"}
            imgSrc={clean}
            imgAlt={"clean icon"}
            content={
              "I strive to keep things simple and elegant, not only design elements but my codebase and development process as well."
            }
          />
          {/* intuitive slide */}
          <AboutSlide
            aos={"fade-left"}
            subtitle={"Intuitive"}
            imgSrc={lightbulb}
            imgAlt={"lightbulb icon"}
            content={
              "Focused on producing easy to use interfaces and user experiences that feel natural."
            }
          />
          {/* responsive slide */}
          <AboutSlide
            aos={"fade-right"}
            subtitle={"Responsive"}
            imgSrc={responsive}
            imgAlt={"devices icon"}
            content={
              "With the amount of web traffic from mobile devices constantly increasing, ensuring designs look and feel good on screens of all sizes is a top priority."
            }
          />
          {/* performant slide */}
          <AboutSlide
            aos={"fade-left"}
            subtitle={"Fast"}
            imgSrc={performant}
            imgAlt={"lightning bolt icon"}
            content={
              "Utilizing best practices and the latest technologies to minimize load times and provide an expereince that feels smooth."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
