import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

const informationAnimation = keyframes`${fadeInRight}`;

export const HeroContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-rows: minmax(200px, auto);
  @media screen and (max-width: 768px) {
    display: block;
    background: rgb(34, 130, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 130, 195, 1) 0%,
      rgba(0, 212, 255, 1) 85%
    );
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 75%;
`;

export const InformationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25%;
  @media screen and (max-width: 768px) {
    padding: 0 5%;
  }
`;

export const HighlightedText = styled.h4`
  color: #92cece;
  font-weight: 400;
  animation: 0.4s ${informationAnimation};
`;

export const TitleText = styled.h1`
  margin: 3px 0%;
  animation: 0.6s ${informationAnimation};
`;

export const SubtitleText = styled.h3`
  font-weight: 400;
  animation: 0.8s ${informationAnimation};
`;

export const InformationParagraph = styled.p`
  margin: 5% 0%;
  line-height: 1.65;
  text-align: justify;
  animation: 1s ${informationAnimation};
`;

export const ButtonContainer = styled.div`
  animation: 1s ${informationAnimation};
`;
