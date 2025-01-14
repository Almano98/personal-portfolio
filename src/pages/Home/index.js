import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/SideBar";
import HeroSection from "../../components/HeroSection";
import ProjectSection from "../../components/ProjectsSection";
import ExperienceSection from "../../components/ExperienceSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
