import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles.styles";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

function App() {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <GlobalStyles />
      <Navbar active={active} setActive={setActive} />
      <Home setActive={setActive} />
    </Container>
  );
}

export default App;
