import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PortfolioPage = () => {
  const location = useLocation();
  const userDetails = location.state; // Access user details passed from DataEntryPage

  return (
    <div className="portfolio-page">
      <Navbar />
      <HeroSection userDetails={userDetails} />
      <AboutMe userDetails={userDetails} />
      <Projects userDetails={userDetails} />
      <Contact />
      <Footer userDetails={userDetails} />
    </div>
  );
};

export default PortfolioPage;