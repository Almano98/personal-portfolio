import React, { useState } from "react";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import {
  ProjectCardContainer,
  ProjectContainer,
  CarousalContainer,
} from "./ProjectElements";
import { FilterButton, ButtonContainer } from "../common/ButtonElements";
import Card from "./components/Card";
import ProjectData from "../../data/project-data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectSection = () => {
  const INITIAL_PROJECT_TYPE = "featured";
  const filterProjects = (type) => {
    return ProjectData.filter((project) => {
      return project.type.includes(type);
    });
  };

  const [activeType, setActiveType] = useState(INITIAL_PROJECT_TYPE);

  const [activeProjects, setActiveProjects] = useState(
    filterProjects(INITIAL_PROJECT_TYPE)
  );

  const handleClick = (event) => {
    setActiveType(event.target.id);
    setActiveProjects(filterProjects(event.target.id));
  };
  return (
    <>
      <ProjectContainer id="projects">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <SectionHeader>
            <SectionHeaderText>Projects</SectionHeaderText>
          </SectionHeader>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <ButtonContainer>
            <FilterButton
              id="featured"
              onClick={handleClick}
              active={activeType === "featured"}
            >
              Featured
            </FilterButton>
            <FilterButton
              id="professional"
              onClick={handleClick}
              active={activeType === "professional"}
            >
              Professional
            </FilterButton>
            <FilterButton
              id="personal"
              onClick={handleClick}
              active={activeType === "personal"}
            >
              Personal
            </FilterButton>
          </ButtonContainer>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <ProjectCardContainer>
            <CarousalContainer>
              <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                interval={30000}
              >
                {activeProjects.map((project, index) => (
                  <Card
                    key={index}
                    image={project.image}
                    name={project.project_name}
                    description={project.project_description}
                    link={project.project_link}
                  />
                ))}
              </Carousel>
            </CarousalContainer>
          </ProjectCardContainer>
        </AnimationOnScroll>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
