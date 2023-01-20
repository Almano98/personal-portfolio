import React from "react";
import {
  ButtonContainer,
  InformationContainer,
  InformationContent,
  SkillsContainer,
  SkillTags,
} from "./SkillElements";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import { FilterButton } from "../common/ButtonElements";
import { DiAndroid } from "react-icons/di";
import { IconContext } from "react-icons";

const SkillSection = () => {
  return (
    <>
      <SkillsContainer id="about">
        <SectionHeader>
          <SectionHeaderText>SKILLS</SectionHeaderText>
        </SectionHeader>
        <ButtonContainer>
          <FilterButton>Front-End</FilterButton>
          <FilterButton>Back-End</FilterButton>
          <FilterButton>DevOps</FilterButton>
          <FilterButton>Solution Design</FilterButton>
        </ButtonContainer>
        <InformationContainer>
          <InformationContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </InformationContent>
          <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
            <SkillTags>
              <DiAndroid></DiAndroid>
              <DiAndroid></DiAndroid>
              <DiAndroid></DiAndroid>
              <DiAndroid></DiAndroid>
              <DiAndroid></DiAndroid>
            </SkillTags>
          </IconContext.Provider>
        </InformationContainer>
      </SkillsContainer>
    </>
  );
};

export default SkillSection;
