import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/SideBar";
import HeroSection from "../../components/HeroSection";
import SkillSection from "../../components/SkillsSection";
import ProjectSection from "../../components/ProjectsSection";

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
      <SkillSection />
      {/* <ProjectSection /> */}
    </>
  );
};

export default Home;
