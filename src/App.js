import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles.styles";

// Icons
import { MdDarkMode, MdLightMode, MdColorLens } from "react-icons/md";

const Container = styled.div`
  width: 100vw;
  height: auto;
  background: ${(props) => props.background};
  position: relative;
`;

const SideEffect = styled.div`
  position: absolute;
  right: 2%;
  top: 2%;
  width: 70px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    right: 120px;
    top: 80px;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

const Mode = styled.div`
  width: 25px;
  height: 25px;
`;

const ColorIcon = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
  }
  width: 25px;
  height: 25px;
`;

const ColorBox = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
    height: 25px;
    width: 0;
    padding: 10px 0;
    margin-left: -50px;
    display: flex;
    justify-content: space-around;
    transition: all 0.5s linear;
    cursor: pointer;

    &.active {
      width: 200px;
    }
  }
`;

const Color = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
`;

function App() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState(false);
  const [colorIndex, setColorIndex] = useState(4);
  const [colorActive, setColorActive] = useState(false);

  return (
    <Container background={mode ? "rgb(234, 233, 233)" : "black"}>
      <SideEffect>
        <IconContainer>
          <Mode onClick={() => setMode(mode === true ? false : true)}>
            {mode ? (
              <MdDarkMode style={{ fontSize: "25px" }} />
            ) : (
              <MdLightMode style={{ color: "white", fontSize: "25px" }} />
            )}
          </Mode>
          <ColorIcon
            onClick={() => setColorActive(colorActive === false ? true : false)}
          >
            <MdColorLens
              style={{ color: mode ? "black" : "white", fontSize: "25px" }}
            />
          </ColorIcon>
        </IconContainer>

        <ColorBox className={colorActive ? "active" : ""}>
          <Color background="red" onClick={() => setColorIndex(1)} />
          <Color background="yellow" onClick={() => setColorIndex(2)} />
          <Color background="green" onClick={() => setColorIndex(3)} />
          <Color background="blue" onClick={() => setColorIndex(4)} />
        </ColorBox>
      </SideEffect>

      <GlobalStyles />
      <Navbar
        active={active}
        setActive={setActive}
        mode={mode}
        colorIndex={colorIndex}
      />
      <Home setActive={setActive} mode={mode} colorIndex={colorIndex} />
      <Projects mode={mode} colorIndex={colorIndex} />
      <Tools mode={mode} colorIndex={colorIndex} />
      <Contact mode={mode} colorIndex={colorIndex} />
    </Container>
  );
}

export default App;
