import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import "./App.css";
import "./Landing.css";
import "./About.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <AboutPage />
    </div>
  );
}

export default App;
