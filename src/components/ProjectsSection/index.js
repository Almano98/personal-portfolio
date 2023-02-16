import React from "react";
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

const ProjectSection = () => {
  console.log(ProjectData);
  return (
    <>
      <ProjectContainer id="projects">
        <SectionHeader>
          <SectionHeaderText>Projects</SectionHeaderText>
        </SectionHeader>
        <ButtonContainer>
          <FilterButton>Featured</FilterButton>
          <FilterButton>Professional</FilterButton>
          <FilterButton>Personal</FilterButton>
        </ButtonContainer>
        <ProjectCardContainer>
          <CarousalContainer>
            <Carousel
              // autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              dynamicHeigh={true}
            >
              {ProjectData.map((project, index) => (
                <Card
                  key={index}
                  name={project.project_name}
                  description={project.project_description}
                  link={project.project_link}
                />
              ))}
            </Carousel>
          </CarousalContainer>
        </ProjectCardContainer>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
