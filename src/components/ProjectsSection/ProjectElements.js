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
  height: 80vh;
`;

export const CarousalContainer = styled.div`
  width: 100rem;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export const CardBackground = styled.div``;

export const ImageBg = styled.img`
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 90%;
`;
