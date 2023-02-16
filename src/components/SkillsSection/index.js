import React, { useState, useEffect, useRef } from "react";
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
  const textRef = useRef();
  const handleClick = (event) => {
    setActiveSkill(event.target.id);
  };

  useEffect(() => {
    textRef.current.animate(
      {
        opacity: [0, 1],
      },
      300
    );
  });

  return (
    <>
      <SkillsContainer id="skills">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <SectionHeader>
            <SectionHeaderText>Skills</SectionHeaderText>
          </SectionHeader>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
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
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <InformationContainer ref={textRef}>
            <InformationContent>
              {skills[activeSkill].description}
            </InformationContent>
          </InformationContainer>
        </AnimationOnScroll>
      </SkillsContainer>
    </>
  );
};

export default SkillSection;
