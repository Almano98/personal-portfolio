import React from "react";
import {
  CardContainer,
  Title,
  ProjectLink,
  ContentContainer,
  Description,
  CarousalContainer,
} from "./CardElements";

const Card = (props) => {
  return (
    <CarousalContainer>
      <CardContainer>
        <ContentContainer>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <ProjectLink href={props.link}>Visit Project</ProjectLink>
        </ContentContainer>
      </CardContainer>
    </CarousalContainer>
  );
};

export default Card;
