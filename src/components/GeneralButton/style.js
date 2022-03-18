import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => (props.width ? props.width : "max-content")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#002543")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  padding: 3px 8px;
  border: none;
  border-radius: ${(props) => (props.bdradius ? props.bdradius : "8px")};
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "30px")};
  display: flex;
  align-items: center;
  gap: 10px;
`;
