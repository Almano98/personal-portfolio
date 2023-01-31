import React, { useState } from "react";
import {
  InformationContainer,
  InformationContent,
  SkillsContainer,
} from "./SkillElements";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import { FilterButton, ButtonContainer } from "../common/ButtonElements";
import skills from "../../data/skills-data.json";

const SkillSection = () => {
  const [activeSkill, setActiveSkill] = useState("0");
  const handleClick = (event) => {
    setActiveSkill(event.target.id);
  };
  return (
    <>
      <SkillsContainer id="about">
        <SectionHeader>
          <SectionHeaderText>Services</SectionHeaderText>
        </SectionHeader>
        <ButtonContainer>
          {skills.map((skill) => (
            <FilterButton
              key={skill.id}
              id={skill.id}
              active={activeSkill === skill.id}
              onClick={handleClick}
            >
              {skill.name}
            </FilterButton>
          ))}
        </ButtonContainer>
        <InformationContainer>
          <InformationContent>
            {skills[activeSkill].description}
          </InformationContent>
        </InformationContainer>
      </SkillsContainer>
    </>
  );
};

export default SkillSection;
