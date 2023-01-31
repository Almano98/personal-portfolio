import styled from "styled-components";

export const SkillsContainer = styled.div`
  min-height: 100vh;
`;

export const InformationContainer = styled.div`
  // background: lightgray;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const InformationContent = styled.p`
  line-height: 1.65;
  text-align: justify;

  padding: 5% 25%;
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    padding: 2% 10%;
  }
`;
