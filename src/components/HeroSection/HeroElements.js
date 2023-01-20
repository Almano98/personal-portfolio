import styled, { keyframes } from "styled-components";
import {
  fadeInRight,
  fadeInLeft,
  fadeIn,
  hinge,
  jello,
  tada,
  slideInRight,
  swing,
  wobble,
  zoomIn,
} from "react-animations";

const imageAnimation = keyframes`${zoomIn}`;
const informationAnimation = keyframes`${fadeInRight}`;

export const HeroContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-rows: minmax(200px, auto);
`;

export const ImageContainer = styled.div`
  //   background: red;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // animation: 0.2s ${imageAnimation};
  // animation-delay: 0.5s;
  // animation-fill-mode: both;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-height: 50%;
  max-width: 75%;
`;

export const InformationContainer = styled.div`
  //   background: green;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25%;
`;

export const HighlightedText = styled.h4`
  color: blue;
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
  margin-top: 5%;
  line-height: 1.65;
  text-align: justify;
  animation: 1s ${informationAnimation};
`;
