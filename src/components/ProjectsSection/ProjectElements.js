import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

export const ProjectCardContainer = styled.div`
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const CarousalContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
