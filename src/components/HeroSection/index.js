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
          I am a software engineer based in Cape Town, South Africa with over
          three years of experience in multiple software industries. My
          expertise lies primarily in backend development and DevOps, but I am
          currently working on shifting my focus towards frontend development.
          <br />
          <br />
          In addition to my professional interests, I have a passion for a
          variety of activities outside of software engineering. I am an avid
          rock climber, and I also enjoy playing the guitar and exploring new
          hobbies. Currently, I am learning music production, and I am excited
          to continue to expand my skills in this area.
          <br />
          <br />
          Thank you for taking the time to view my portfolio, and I look forward
          to the opportunity to connect with you!
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
