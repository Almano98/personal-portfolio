import React from "react";
import {
  CardContainer,
  Title,
  ProjectLink,
  Description,
  CarousalContainer,
} from "./CardElements";

const Card = (props) => {
  return (
    <CarousalContainer>
      <CardContainer>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <ProjectLink href={props.link} target="_blank">
          View Project
        </ProjectLink>
      </CardContainer>
    </CarousalContainer>
  );
};

export default Card;
