import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.color};
  border-radius: 25px;
  color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color};
    background: ${(props) => props.font};
  }
`;
