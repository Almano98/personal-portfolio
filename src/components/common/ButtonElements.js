import styled from "styled-components";

export const FilterButton = styled.button`
  border-radius: 8px;
  border: 2px solid blue;
  background: white;
  width: 10rem;
  padding: 1rem;
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 10rem;
  padding: 1rem;
  border: 2px solid blue;
  color: blue;
  &:hover {
    color: white;
    background: blue;
  }
`;
