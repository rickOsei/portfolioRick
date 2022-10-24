import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoBlack from "../image/portfolioLogoBlack.png";
import Logo from "../image/portfolioLogo.png";
import { Button } from "./Button.style";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome, FaDownload } from "react-icons/fa";
import { BsFillPersonFill, BsFolderFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  padding: 25px;
  background: black;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SidebarButton = styled.div`
  width: 80px;
  height: 45px;
  font-size: 25px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const SideNav = styled.div`
  height: 80px;
  width: 100vw;
  padding: 0 35px;
  margin-top: 10px;
  height: 0;
  overflow: hidden;
  transition: all 0.8s linear;

  &.active {
    height: 95px;
  }

  @media screen and (min-width: 426px) {
    &.active {
      height: 75px;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 768px) {
    height: 0;
    margin-top: 15px;
    transition: all 0.5s linear;

    &.active {
      height: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  list-style: none;

  @media screen and (min-width: 426px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
  }

  @media screen and (min-width: 681px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SideItem = styled.li`
  font-size: 15px;
  color: white;

  @media screen and (max-width: 425px) {
    font-size: 13.5px;
  }
`;

const ExtraSideItem = styled.li`
  font-size: 15px;
  color: white;

  @media screen and (max-width: 425px) {
    font-size: 13.5px;
  }
  @media screen and (min-width: 681px) {
    display: none;
  }
`;

const ProfileIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border: 2px solid rgba(189, 182, 182, 0.524);
  border-radius: 50%;

  position: absolute;
  top: 15px;
  left: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LogoIcon = styled.img`
  width: 135px;
  height: 35px;

  @media screen and (min-width: 769px) and (max-width: 1000px) {
    width: 142px;
    height: 40px;
  }

  @media screen and (min-width: 1001px) {
    width: 160px;
    height: 40px;
  }
`;

LogoIcon.defaultProps = {
  src: LogoBlack,
};

const LinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 5px;
`;
const ListItems = styled.li`
  margin: 0 20px;
  height: 30px;
  font-size: 14px;
  color: white;
  cursor: pointer;

  @media screen and (min-width: 1001px) {
    margin: 0 40px;
    font-size: 16px;
  }

  &:hover {
    border-bottom: 1px solid orange;
  }

  &.active {
    color: orange;

    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 15px;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

// active button function

function Navbar({ active, setActive }) {
  useEffect(() => {
    const button = document.getElementsByClassName("btn");
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        button[i].className += " active";
        console.log(current);
      });
    }

    return () => {};
  }, []);

  return (
    <>
      <NavContainer>
        <SidebarButton>
          <AiOutlineBars
            onClick={() => setActive(active === true ? false : true)}
            style={{ cursor: "pointer" }}
          />
        </SidebarButton>

        <LogoContainer>
          <LogoIcon src={Logo} />
        </LogoContainer>
        <LinksContainer>
          <List direction="row">
            <ListItems className="btn">Home</ListItems>
            <ListItems className="btn">About</ListItems>
            <ListItems className="btn">Projects</ListItems>
            <ListItems className="btn">Skills</ListItems>
            <ListItems className="btn">Contact</ListItems>
          </List>
        </LinksContainer>
        <ButtonContainer>
          <Button background="transparent">Download CV</Button>
        </ButtonContainer>
      </NavContainer>

      <SideNav className={active ? "active" : ""}>
        <NavLinks>
          <SideItem>
            <FaHome style={{ color: "white", marginRight: "10px" }} />
            Home
          </SideItem>
          <SideItem>
            <BsFillPersonFill style={{ color: "white", marginRight: "10px" }} />
            About
          </SideItem>
          <SideItem>
            <BsFolderFill style={{ color: "white", marginRight: "10px" }} />
            Projects
          </SideItem>
          <SideItem>
            <GiBrain style={{ color: "white", marginRight: "10px" }} />
            Skills
          </SideItem>
          <SideItem>
            <MdContactPhone style={{ color: "white", marginRight: "10px" }} />
            Contact
          </SideItem>
          <ExtraSideItem>
            <FaDownload style={{ color: "white", marginRight: "10px" }} />
            Download CV
          </ExtraSideItem>
        </NavLinks>
      </SideNav>
    </>
  );
}

export default Navbar;
