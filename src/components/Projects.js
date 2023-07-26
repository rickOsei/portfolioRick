import React from "react";
import styled from "styled-components";
import fitness from "../image/projects/fitness.png";
import calcus from "../image/projects/Calcus.png";
import fanta from "../image/projects/fanta.png";
import ecommerce from "../image/projects/ecommerce.png";
import cedirates from "../image/projects/cedirates2.png";
import { pokebookLogo } from "../images";
import todolist from "../image/projects/todolist.png";
import restaurant from "../image/projects/restaurant.png";

// ICONS
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiBootstrap,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const Container = styled.section`
  width: 100vw;
  padding: 10px;
  height: auto;
  margin-top: 50px;

  @media screen and (min-width: 769px) {
    width: 90vw;
    margin: 0 auto;
    margin-top: 100px;
  }
`;

const Heading = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 0 20px;

  @media screen and (min-width: 769px) {
    padding: 0;
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

const CardContainer = styled.section`
  width: 100%;
  display: grid;
  justify-content: center;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 1025px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
  transition: all 1s linear;
`;

const Card = styled.div`
  width: 90%;
  height: 90%;
  margin: 20px 20px 20px 20px;

  background: white;
  overflow: hidden;
  position: relative;

  border: none;
  border-radius: 15px;
  box-shadow: ${(props) => props.shadow};

  &:hover ${CardImage} {
    filter: blur(7px);
  }
`;

const Overlay = styled.div`
  width: 200%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  background: transparent;
  display: flex;
  justify-content: flex-end;
  transition: all 0.7s linear;

  &:hover {
    transform: translateX(-50%);
  }
`;

const OverlayContent = styled.div`
  width: 50%;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OverlayTitle = styled.h1`
  font-size: 12px;
  color: ${(props) => props.color};
  font-weight: 800;
  margin-bottom: 8px;
`;

const OverlayText = styled.p`
  font-size: 11.5px;
  color: white;
  margin-bottom: 10px;
  line-height: 15px;

  @media screen and (min-width: 321px) {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

const OverlayTools = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 321px) {
    margin-bottom: 15px;
  }
`;

const OverlayButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OverlayButton = styled.button`
  padding: 3px 5px;
  font-size: 11.5px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 3px 3px rgba(164, 161, 161, 0.258);
  margin-right: 15px;
  background: transparent;
  color: white;

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.8);
  }

  &:active {
    transform: scale(1);
    background: transparent;
  }

  @media screen and (min-width: 321px) {
    font-size: 12px;
    padding: 5px 7px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
`;

function Projects({ mode, colorIndex }) {
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
    <Container id="projects">
      <Heading>
        <Title color={color}>Projects</Title>

        <Description color={mode ? "black" : "white"}>
          This is a showcase of some of my work. <br /> I hope to update my
          portfolio with more projects as I learn and gain new skills every day.
        </Description>
      </Heading>
      <CardContainer>
        <Card shadow="2px 2px 2px 2px rgba(128, 128, 128, 0.8);">
          <CardImage src={cedirates} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>Cedirates Website</OverlayTitle>
              <OverlayText>
                A website providing updated fuel prices and exchange rates as
                well as historical data on the respective pices and rates.
              </OverlayText>
              <OverlayTools>
                <SiMongodb
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiExpress
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiReact
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiNodedotjs
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://cedirates.com/">
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="">
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>
        <Card shadow="2px 2px 2px 2px rgba(128, 128, 128, 0.8);">
          <CardImage src={fitness} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>Fitness Homepage</OverlayTitle>
              <OverlayText>
                A responsive homepage of a fitness website{" "}
              </OverlayText>
              <OverlayTools>
                <SiHtml5
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiBootstrap
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://fitnesstwo.vercel.app/">
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="https://github.com/rickOsei/Fitness">
                  {" "}
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>
        <Card shadow="2px 2px 2px 2px rgb(94, 93, 93);">
          <CardImage src={restaurant} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>Review Website</OverlayTitle>
              <OverlayText>A MERN stack restaurant review website</OverlayText>
              <OverlayTools>
                <SiMongodb
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiExpress
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiReact
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiNodedotjs
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://restaurant-review-brown.vercel.app/">
                  {" "}
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="https://github.com/rickOsei/restaurant_review">
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>

        <Card shadow="2px 2px 2px 2px rgba(245, 245, 245, 0.965);">
          <CardImage src={fanta} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>Fanta Homepage</OverlayTitle>
              <OverlayText>
                A color flipping fanta homepage, which changes background color
                depending on the click icon.
              </OverlayText>
              <OverlayTools>
                <SiHtml5
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiJavascript
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://fanta-flipping.netlify.app/">
                  {" "}
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="https://github.com/rickOsei/color-flipper">
                  {" "}
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>
        <Card shadow="2px 2px 2px 2px rgba(128, 128, 128, 0.8);">
          <CardImage src={pokebookLogo} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>PokeBook</OverlayTitle>
              <OverlayText>
                Largest Pokémon index with information about every Pokemon you
                can think of.
              </OverlayText>
              <OverlayTools>
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiReact
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://pokebook-psi.vercel.app/">
                  {" "}
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="https://github.com/rickOsei/Pokebook">
                  {" "}
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>

        <Card shadow="2px 2px 2px 2px rgb(94, 93, 93);">
          <CardImage src={ecommerce} />
          <Overlay>
            <OverlayContent>
              <OverlayTitle color={color}>Ecommerce Website</OverlayTitle>
              <OverlayText>
                An ecommerce website created with React the frontend and
                Firebase for backend.
              </OverlayText>
              <OverlayTools>
                <SiHtml5
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiCss3
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiJavascript
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiReact
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <SiFirebase
                  style={{
                    color: "gray",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </OverlayTools>
              <OverlayButtonContainer>
                <Anchor href="https://lafashion.vercel.app/">
                  {" "}
                  <OverlayButton>Preview</OverlayButton>
                </Anchor>

                <Anchor href="https://github.com/rickOsei/e-commerce-site">
                  <OverlayButton>Github Repo</OverlayButton>
                </Anchor>
              </OverlayButtonContainer>
            </OverlayContent>
          </Overlay>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default Projects;
