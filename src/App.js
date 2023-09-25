import React from "react";
import "./index.css";
import LandingPage from "./routes/LandingPage";
import About from "./routes/AboutMe";
import Project from "./routes/MyProjects";
import Contact from "./routes/ContactUs";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
