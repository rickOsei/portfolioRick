import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

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

const Socials = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 250px;
  margin: 10px;
  display: flex;
`;

const ItemText = styled.p`
  color: ${(props) => props.color};
  font-weight: 400;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

function Contact({ mode, colorIndex }) {
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
    <Container id="contacts">
      <Title color={color}>Contact</Title>
      <Description color={mode ? "black" : "white"}>
        Drop a line to say hello, ask for my resume, see if we can build
        something amazing together or reach out to me on any of my socials. I’d
        love to hear from you!
      </Description>
      <Socials>
        <Anchor href="tel:+233209722548">
          <Item>
            <BsTelephoneFill style={{ marginRight: "15px", color: color }} />
            <ItemText color={mode ? "black" : "white"}>+233 209722548</ItemText>
          </Item>
        </Anchor>

        <Anchor href="mailto:rickoseiampah@gmail.com">
          <Item>
            <IoMdMail style={{ marginRight: "15px", color: color }} />
            <ItemText color={mode ? "black" : "white"}>
              Rickoseiampah@gmail.com
            </ItemText>
          </Item>
        </Anchor>

        <Anchor href="https://www.linkedin.com/RichardOseiAmpah">
          <Item>
            <BsLinkedin style={{ marginRight: "15px", color: color }} />
            <ItemText color={mode ? "black" : "white"}>
              Richard Osei Ampah
            </ItemText>
          </Item>
        </Anchor>

        <Anchor href="https://www.twitter.com/RickOsei">
          <Item>
            <BsTwitter style={{ marginRight: "15px", color: color }} />
            <ItemText color={mode ? "black" : "white"}>Rick Osei</ItemText>
          </Item>
        </Anchor>
      </Socials>
    </Container>
  );
}

export default Contact;
