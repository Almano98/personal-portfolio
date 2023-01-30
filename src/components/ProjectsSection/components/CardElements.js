import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(68, 85, 90, 0.2);
  border-radius: 5px;
  background-color: #fefefe;
  text-align: center;
  border: 2px solid #92cece;
  min-height: 300px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: space-between;
  justify-content: flex-end;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  max-width: 80%;
  margin: 10px 0;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const ProjectLink = styled.a`
  color: white;
  background-color: #92cece;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: dark#92cece;
    cursor: pointer;
  }
`;
