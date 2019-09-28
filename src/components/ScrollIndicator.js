import React from "react";

const ScrollIndicator = () => {
  window.onscroll = function() {
    myFunction();
  };

  const myFunction = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };

  return (
    <div id="progress-container">
      <div id="progress-bar"></div>
    </div>
  );
};

export default ScrollIndicator;
