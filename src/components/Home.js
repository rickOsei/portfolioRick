import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button.style";
import ProfilePhoto from "../image/retouch_black.jpg";
import ProfilePic from "../image/retouch_black copy.jpg";

const Container = styled.div`
  width: 90vw;
  height: 100vh;
  padding: 10px;
  margin: 0 auto;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-content: space-between;

  @media screen and (min-width: 769px) {
    width: 90vw;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 120px;

    @media screen and (min-width: 1101px) {
      width: 80vw;
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
  font-weight: 900;

  @media screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 35px;
  }

  @media screen and (min-width: 769px) and (max-width: 1219px) {
    font-size: 20px;
    line-height: 35px;
  }

  @media screen and (min-width: 1220px) {
    font-size: 23px;
    line-height: 45px;
    letter-spacing: 0.7px;
  }
`;

const Span = styled.span`
  color: orange;
  position: relative;
  animation: colorChange 2s ease-in-out 1;
  animation-fill-mode: forwards;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: transparent;
    top: 100%;
    animation: moves 2s ease-in-out 1;
  }

  @keyframes colorChange {
    0% {
      color: orange;
    }

    40%,
    60% {
      color: white;
    }

    100% {
      color: orange;
    }
  }

  @keyframes moves {
    0% {
      top: 100%;
    }

    40%,
    60% {
      top: 0;
    }

    100% {
      top: 100%;
    }
  }
`;

const About = styled.p`
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;

  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1025px) {
    font-size: 17px;
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
  }
`;

const Top = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 4px solid orange;
    border-color: orange transparent transparent orange;

    position: relative;
    left: 5%;
    bottom: 12%;
  }

  @media screen and (min-width: 941px) {
    width: 100px;
    height: 100px;
    bottom: 8%;
  }

  @media screen and (max-width: 920px) and (height: 1368px) {
    bottom: 5%;
  }

  @media screen and (min-width: 1441px) {
    left: 5%;
  }
`;

const Bottom = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 4px solid orange;
    border-color: transparent orange orange transparent;

    position: relative;
    left: 5%;
    top: 50%;
  }

  @media screen and (min-width: 941px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 5px 5px rgba(189, 182, 182, 0.3);

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

function Home({ setActive }) {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("I am a web developer.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <Container onClick={() => setActive(false)}>
      <Desc>
        <Title>
          Hi, my name is
          <Span> Richard Osei Ampah.</Span>
        </Title>

        <Title>{text}</Title>
        <About className="typed">
          A diligent and passionate web developer with experience in creating
          beautiful and engaging web designs, and also, I love what I do.
        </About>
        <Button background="orange">More About Me</Button>
      </Desc>
      <Photo>
        <Top />
        <ProfileIcon src={ProfilePic} />
        <Bottom />
      </Photo>
    </Container>
  );
}

export default Home;
