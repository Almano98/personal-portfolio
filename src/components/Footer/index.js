import React from "react";
import logo from "../../assests/images/logo-small.png";
import { FooterContainer, FooterIcon } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <img
          src={logo}
          alt="logo"
          style={{ height: "75px", width: "75px", marginBottom: "1rem" }}
        ></img>
        <div>
          <FooterIcon
            bgColor="white"
            fgColor="#93cece"
            url="https://www.linkedin.com/in/matthew-almano/"
            target="_blank"
          />
          <FooterIcon
            bgColor="white"
            fgColor="#93cece"
            url="mailto:matthew.almano51@gmail.com"
            target="_blank"
          />
          <FooterIcon
            bgColor="white"
            fgColor="#93cece"
            url="https://github.com/Almano98"
            target="_blank"
          />
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
