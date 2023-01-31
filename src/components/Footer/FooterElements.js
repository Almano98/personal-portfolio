import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export const FooterContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  background: lightgray;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const FooterIcon = styled(SocialIcon)`
  margin: 0 1rem;
  border: 2px solid #93cece;
  border-radius: 25px;
`;
