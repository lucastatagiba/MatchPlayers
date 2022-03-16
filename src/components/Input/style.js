import styled from "styled-components";

export const Container = styled.input`
  width: ${(props) => props.width};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#F3F2EF")};
  color: ${(props) => (props.color ? props.color : "#6C8394")};
  padding: 5px 8px;
  border: none;
  border-radius: ${(props) => (props.bdradius ? props.bdradius : "8px")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "30px")};
`;
