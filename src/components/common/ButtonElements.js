import styled from "styled-components";

export const FilterButton = styled.button`
  border-radius: 40px;
  width: 15rem;
  padding: 1rem;
  border: 2px solid #92cece;
  margin: 0 1rem;
  background: #fff;
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
  background: #fff;

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
  padding-bottom: 1rem;
`;

export const LinkButton = styled.a`
  color: black;
  background: transparent;
  text-decoration: none;
  border-radius: 40px;
  width: 10rem;
  padding: 1rem 2rem;
  border: 2px solid #92cece;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background: #92cece;
  }
`;
