import React, { useEffect } from "react";
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
  background: transparent;
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
  color: ${(props) => props.color};

  @media screen and (max-width: 425px) {
    font-size: 13.5px;
  }
`;

const ExtraSideItem = styled.li`
  font-size: 15px;
  color: ${(props) => props.color};

  @media screen and (max-width: 425px) {
    font-size: 13.5px;
  }
  @media screen and (min-width: 681px) {
    display: none;
  }
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
  color: ${(props) => props.color};
  cursor: pointer;

  @media screen and (min-width: 1001px) {
    margin: 0 40px;
    font-size: 16px;
  }

  &:hover {
    border-bottom: 1px solid orange;
  }

  &.active {
    color: ${(props) => props.font};

    &:hover {
      border-bottom: 1px solid ${(props) => props.color};
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
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

function Navbar({ active, setActive, mode, colorIndex }) {
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

  let color = "";
  switch (colorIndex) {
    case 1:
      color = "#ce6464";
      break;
    case 2:
      color = "#ceb464";
      break;
    case 3:
      color = "#6fce64";
      break;
    case 4:
      color = "#6480ce";
      break;
    default:
      color = "#ce6464";
  }

  return (
    <>
      <NavContainer>
        <SidebarButton>
          <AiOutlineBars
            onClick={() => setActive(active === true ? false : true)}
            style={{ cursor: "pointer", color: mode ? "black" : "white" }}
          />
        </SidebarButton>

        <LogoContainer>
          <LogoIcon src={mode ? LogoBlack : Logo} />
        </LogoContainer>
        <LinksContainer>
          <List direction="row">
            <Anchor href="#">
              <ListItems
                className="btn"
                font={color}
                color={mode ? "black" : "white"}
              >
                Home
              </ListItems>
            </Anchor>

            <Anchor href="#about">
              <ListItems
                className="btn"
                font={color}
                color={mode ? "black" : "white"}
              >
                About
              </ListItems>
            </Anchor>

            <Anchor href="#projects">
              <ListItems
                className="btn"
                font={color}
                color={mode ? "black" : "white"}
              >
                Projects
              </ListItems>
            </Anchor>

            <Anchor href="#tools">
              <ListItems
                className="btn"
                font={color}
                color={mode ? "black" : "white"}
              >
                Skills
              </ListItems>
            </Anchor>

            <Anchor href="#contacts">
              <ListItems
                className="btn"
                font={color}
                color={mode ? "black" : "white"}
              >
                Contact
              </ListItems>
            </Anchor>
          </List>
        </LinksContainer>
        <ButtonContainer>
          <Anchor href="./Osei_Richard_Ampah_CV2.pdf" download>
            <Button
              background="transparent"
              font={color}
              color={mode ? "black" : "white"}
            >
              Download CV
            </Button>
          </Anchor>
        </ButtonContainer>
      </NavContainer>

      <SideNav className={active ? "active" : ""}>
        <NavLinks>
          <Anchor href="#">
            <SideItem color={mode ? "black" : "white"}>
              <FaHome style={{ color: "white", marginRight: "10px" }} />
              Home
            </SideItem>
          </Anchor>

          <Anchor href="#about">
            <SideItem color={mode ? "black" : "white"}>
              <BsFillPersonFill
                style={{ color: "white", marginRight: "10px" }}
              />
              About
            </SideItem>
          </Anchor>

          <Anchor href="#projects">
            <SideItem color={mode ? "black" : "white"}>
              <BsFolderFill style={{ color: "white", marginRight: "10px" }} />
              Projects
            </SideItem>
          </Anchor>

          <Anchor href="#tools">
            <SideItem color={mode ? "black" : "white"}>
              <GiBrain style={{ color: "white", marginRight: "10px" }} />
              Skills
            </SideItem>
          </Anchor>

          <Anchor href="#contacts">
            <SideItem color={mode ? "black" : "white"}>
              <MdContactPhone style={{ color: "white", marginRight: "10px" }} />
              Contact
            </SideItem>
          </Anchor>

          <Anchor href="./CV.pdf" download>
            <ExtraSideItem color={mode ? "black" : "white"}>
              <FaDownload style={{ color: "white", marginRight: "10px" }} />
              Download CV
            </ExtraSideItem>
          </Anchor>
        </NavLinks>
      </SideNav>
    </>
  );
}

export default Navbar;
