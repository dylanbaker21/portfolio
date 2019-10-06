import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import "./styles/App.css";
import "./styles/Landing.css";
import "./styles/About.css";
import "./styles/Navbar.css";
import "./styles/Project.css";
import "./styles/Contact.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
