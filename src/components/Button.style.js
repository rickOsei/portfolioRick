import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: ${(props) => props.background};
  border: 1px solid orange;
  border-radius: 25px;
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
    background: yellow;
  }
`;
