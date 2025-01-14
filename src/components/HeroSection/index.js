import React from "react";
import {
  HeroContainer,
  ImageContainer,
  InformationContainer,
  Image,
  HighlightedText,
  TitleText,
  SubtitleText,
  InformationParagraph,
  ButtonContainer,
} from "./HeroElements";
import { LinkButton } from "../common/ButtonElements";
import character from "../../assests/images/character2.gif";
import pdf from "../../assests/files/resume.pdf";

const HeroSection = () => {
  return (
    <HeroContainer>
      <InformationContainer>
        <HighlightedText>Hi, I am</HighlightedText>
        <TitleText>Matthew Almano</TitleText>
        <SubtitleText>SOFTWARE ENGINEER</SubtitleText>
        <InformationParagraph>
          I am a Full Stack Software Engineer with a backend focus and 5 years
          of professional experience. I am driven by a passion for solving
          problems—whether they are technical challenges or process
          improvements—and thrive in collaborative environments where I can
          contribute to both team and business growth.
          <br />
          <br />
          What I enjoy most about my work is the opportunity to collaborate with
          others. I find immense satisfaction in supporting my teammates,
          sharing knowledge, and driving initiatives that improve workflows and
          processes. I believe that fostering open communication and a positive
          work environment leads to better solutions and stronger teams.
          <br />
          <br />
          Throughout my career, I’ve taken pride in going beyond coding to
          address broader challenges within the organization. Whether it's
          improving internal processes, enhancing user experiences, or mentoring
          less experienced team members, I enjoy taking ownership of tasks that
          help elevate the team and the business as a whole.
          <br />
          <br />I am passionate about growing into leadership roles where I can
          continue to innovate, empower others, and contribute to meaningful
          projects that make a lasting impact.
        </InformationParagraph>
        <ButtonContainer>
          <LinkButton href={pdf} target="_blank">
            View CV
          </LinkButton>
        </ButtonContainer>
      </InformationContainer>
      <ImageContainer>
        <Image src={character} alt="Character"></Image>
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
