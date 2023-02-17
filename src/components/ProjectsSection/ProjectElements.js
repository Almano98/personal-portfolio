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
  height: 90vh; //Change to 80vh when adding button filters
`;

export const CarousalContainer = styled.div`
  width: 100rem;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;
