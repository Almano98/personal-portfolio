import React from "react";
import {
  CardContainer,
  Title,
  ProjectLink,
  Description,
  CarousalContainer,
  BackgroundContainer,
} from "./CardElements";

const Card = (props) => {
  return (
    <CarousalContainer>
      <BackgroundContainer
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <CardContainer>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <ProjectLink href={props.link} target="_blank">
            View Project
          </ProjectLink>
        </CardContainer>
      </BackgroundContainer>
    </CarousalContainer>
  );
};

export default Card;
