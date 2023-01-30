import React from "react";
import {
  CardContainer,
  Title,
  ProjectLink,
  ContentContainer,
  Description,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <ContentContainer>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <ProjectLink href={props.link}>Visit Project</ProjectLink>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
