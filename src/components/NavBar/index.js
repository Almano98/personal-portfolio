import React from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  BarIcon,
  Image,
} from "./NavbarElements";
import logo from "../../assests/images/logo-small.png";

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Image src={logo} alt="Matthew Almano"></Image>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <BarIcon />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Experience
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
