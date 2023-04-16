import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import NavigationBar from "./Component/NavigationBar";
import Footer from "./Component/Footer";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="mainbox">
       
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
