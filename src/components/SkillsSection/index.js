import React, { useState } from "react";
import {
  InformationContainer,
  InformationContent,
  SkillsContainer,
} from "./SkillElements";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import { FilterButton, ButtonContainer } from "../common/ButtonElements";
import skills from "../../data/skills-data.json";
import { AnimationOnScroll } from "react-animation-on-scroll";

const SkillSection = () => {
  const [activeSkill, setActiveSkill] = useState("0");
  const handleClick = (event) => {
    setActiveSkill(event.target.id);
  };
  return (
    <>
      {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
      <SkillsContainer id="skills">
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
      {/* </AnimationOnScroll> */}
    </>
  );
};

export default SkillSection;
