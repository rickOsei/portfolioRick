import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button.style";
import ProfilePhoto from "../image/retouch_black.jpg";
import ProfilePic from "../image/retouch_black copy.jpg";

const Container = styled.div`
  width: 90vw;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 120px;

    @media screen and (min-width: 1101px) {
      width: 75vw;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const Desc = styled.section`
  flex: 1;
  color: white;
  margin-bottom: 1px;

  @media screen and (min-width: 769px) {
    margin-top: 5%;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  line-height: 35px;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: ${(props) => props.color};
  @media screen and (min-width: 426px) {
    font-size: 20px;

    @media screen and (min-width: 1220px) {
      font-size: 23px;
      line-height: 45px;
      letter-spacing: 0.7px;
    }
  }
`;

const Span = styled.span`
  color: ${(props) => props.color};
  position: relative;
  overflow: hidden;
`;

const About = styled.p`
  font-size: 14px;
  line-height: 35px;
  font-weight: 400;
  color: ${(props) => props.color};
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 426px) {
    font-size: 16px;
    letter-spacing: 1px;
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1025px) {
      font-size: 17px;
    }
  }
`;

const Photo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media screen and (min-width: 769px) {
    flex: 1;
    position: relative;
    flex-direction: row;
    align-items: initial;
    justify-content: center;
    margin: 0;
    margin-left: 5%;

    &::before {
      content: "";
      width: 80%;
      height: 100%;
      position: absolute;
      top: 10%;
      right: 20%;
      background: transparent;
      border: 2px solid ${(props) => props.color};
      z-index: 1;
    }

    @media screen and (min-width: 1100px) {
      &::before {
        width: 70%;
        right: 30%;
      }
    }

    @media screen and (min-width: 2000px) {
      &::before {
        width: 40%;
        right: 40%;
      }
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 5px 5px rgba(189, 182, 182, 0.2);
  z-index: 2;

  @media screen and (min-width: 601px) {
    width: 70%;
    height: 90%;
    object-fit: fill;
  }

  @media screen and (min-width: 769px) {
    width: 275px;
    height: 350px;
  }

  @media screen and (min-width: 941px) and (max-width: 1024px) {
    width: 320px;
    height: 400px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 320px;
    height: 400px;
  }

  @media screen and (min-width: 1441px) {
    width: 350px;
    height: 430px;
  }
`;

function Home({ setActive, mode, colorIndex }) {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("I am a web developer.");
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text, fullText]);

  return (
    <Container onClick={() => setActive(false)} id="about">
      <Desc>
        <Title color={mode ? "black" : "white"}>
          Hi, my name is
          <Span color={color}> Richard Osei Ampah.</Span>
        </Title>

        <Title color={mode ? "black" : "white"}>{text}</Title>
        <About color={mode ? "black" : "white"}>
          A diligent and passionate web developer with experience in creating
          beautiful and engaging web designs, and also, I love what I do.
        </About>
        <Anchor href="./Osei-Richard-Ampah-CV.pdf" download>
          <Button
            background={color}
            color={mode ? "black" : "white"}
            font="transparent"
          >
            More About Me
          </Button>
        </Anchor>
      </Desc>
      <Photo color={color}>
        <ProfileIcon src={ProfilePic} />
      </Photo>
    </Container>
  );
}

export default Home;
