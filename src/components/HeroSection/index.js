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
import { Button } from "../common/ButtonElements";
import character from "../../assests/images/character.png";

const HeroSection = () => {
  return (
    <HeroContainer>
      <InformationContainer>
        <HighlightedText>Hi, I am</HighlightedText>
        <TitleText>Matthew Almano</TitleText>
        <SubtitleText>SOFTWARE ENGINEER</SubtitleText>
        <InformationParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </InformationParagraph>
        <Button>View CV</Button>
      </InformationContainer>
      <ImageContainer>
        <Image src={character} alt="Yeet"></Image>
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
