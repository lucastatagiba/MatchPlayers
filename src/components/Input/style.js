import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width}px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#F3F2EF")};
  color: ${(props) => (props.color ? props.color : "#6C8394")};
  padding: 5px 8px;
  border: ${(props) => (props.border ? "1px solid var(--Gray-3)" : "none")};
  border-radius: ${(props) => (props.bdradius ? props.bdradius : "8px")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "30px")};
  input {
    background-color: transparent;
    border: none;
  }
`;
