import styled from "styled-components";

export const CarousalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
  max-height: 75vh;
`;

export const CardContainer = styled.div`
  width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(68, 85, 90, 0.2);
  border: 2px solid #92cece;
  border-radius: 15px;
  background-color: #fefefe;
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
  background-color: #92cece;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 1rem;
  text-decoration: none;
  &:hover {
    background-color: #92cece;
    cursor: pointer;
  }
`;
