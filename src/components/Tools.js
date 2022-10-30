import React from "react";
import styled from "styled-components";
import Htmllogo from "../image/tools/html.png";
import Csslogo from "../image/tools/css.png";
import javascriptlogo from "../image/tools/js.png";
import bootstraplogo from "../image/tools/bs.png";
import photoshop from "../image/tools/ps.png";
import reactlogo from "../image/tools/react.png";
import gitlogo from "../image/tools/git.png";
import reduxlogo from "../image/tools/redux.png";
import firebaselogo from "../image/tools/firebase.png";
import vslogo from "../image/tools/vs.png";
import githublogo from "../image/tools/github.png";
import githubwhitelogo from "../image/tools/github2.png";

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding: 20px;
  margin: 0 auto;
  margin-top: 40px;

  @media screen and (min-width: 769px) {
    width: 90vw;
    margin-top: 60px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 35px;
  letter-spacing: 0.5px;
  font-weight: 800;
  color: ${(props) => props.color};
  text-align: center;
  text-transform: capitalize;

  @media screen and (min-width: 426px) {
    font-size: 20px;
    text-align: start;

    @media screen and (min-width: 1220px) {
      font-size: 23px;
      line-height: 45px;
      letter-spacing: 0.7px;
    }
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: ${(props) => props.color};

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

const ToolsContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Tool = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 769px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1025px) {
    width: 96px;
    height: 96px;
  }
`;

function Tools({ mode, colorIndex }) {
  let color = "";
  switch (colorIndex) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "violet";
      break;
    case 3:
      color = "cyan";
      break;
    case 4:
      color = "orange";
      break;
    default:
      color = "red";
  }

  return (
    <Container id="tools">
      <Title color={color}>skills & tools</Title>
      <Description color={mode ? "black" : "white"}>
        Here are the skills, tools and technologies I use to bring life to
        products:
      </Description>
      <ToolsContainer>
        <Tool src={Htmllogo} />
        <Tool src={Csslogo} />
        <Tool src={javascriptlogo} />
        <Tool src={bootstraplogo} />
        <Tool src={photoshop} />
        <Tool src={reactlogo} />
        <Tool src={reduxlogo} />
        <Tool src={gitlogo} />
        <Tool src={mode ? githublogo : githubwhitelogo} />
        <Tool src={vslogo} />
        <Tool src={firebaselogo} />
      </ToolsContainer>
    </Container>
  );
}

export default Tools;
