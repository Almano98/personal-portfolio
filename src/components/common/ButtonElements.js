import styled from "styled-components";

export const FilterButton = styled.button`
  border-radius: 40px;
  width: 15rem;
  padding: 1rem;
  border: 2px solid #92cece;
  margin: 0 1rem;
  &:hover {
    color: white;
    background: #92cece;
  }
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    `color: white;
    background: #92cece;
  `}

  @media screen and (max-width: 768px) {
    padding: 0.2rem 1rem;
    margin: 0.5rem;
    width: 10rem;
  }
`;

export const Button = styled.button`
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

export const ButtonContainer = styled.div`
  min-height: 10%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-bottom: 1rem;
`;
