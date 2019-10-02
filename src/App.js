import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import "./styles/App.css";
import "./styles/Landing.css";
import "./styles/About.css";
import "./styles/Navbar.css";

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
