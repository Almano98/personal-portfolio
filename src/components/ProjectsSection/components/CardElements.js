import styled from "styled-components";

export const CarousalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
  max-height: 75vh;
  background-image: url("./src/assets/images/project-background.jpeg");
`;

export const CardContainer = styled.div`
  z-index: 1;
  width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(68, 85, 90, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.65;
  text-align: justify;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const ProjectLink = styled.a`
  color: white;
  background: transparent;
  text-decoration: none;
  border-radius: 40px;
  width: 10rem;
  padding: 1rem;
  border: 2px solid #92cece;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background: #92cece;
  }
`;
