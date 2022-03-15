import styled from "styled-components";

export const Container = styled.button`
  width: max-content;
  background-color: #${(props) => (props.bgcolor ? props.bgcolor : "002543")};
`;
