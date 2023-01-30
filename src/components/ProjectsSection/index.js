import React from "react";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import { ProjectCardContainer, ProjectContainer } from "./ProjectElements";
import { FilterButton, ButtonContainer } from "../common/ButtonElements";
import Card from "./components/Card";
import ProjectData from "../../data/project-data.json";

const ProjectSection = () => {
  console.log(ProjectData);
  return (
    <>
      <ProjectContainer>
        <SectionHeader>
          <SectionHeaderText>Projects</SectionHeaderText>
        </SectionHeader>
        <ButtonContainer>
          <FilterButton>Featured</FilterButton>
          <FilterButton>Professional</FilterButton>
          <FilterButton>Personal</FilterButton>
        </ButtonContainer>
        <ProjectCardContainer>
          {ProjectData.map((project, index) => (
            <Card
              key={index}
              name={project.project_name}
              description={project.project_description}
              link={project.project_link}
            />
          ))}
        </ProjectCardContainer>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
