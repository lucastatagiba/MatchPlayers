import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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
export const ContainerModal = styled.div`
  display: ${(props) => props.display}!important;
  align-items: start !important;
  padding: 5px;
  border: 1px solid var(--Gray-3);
  border-radius: 8px;
  width: 300px;
  background-color: var(--Gray-1);
  position: absolute;
  top: 30px;
  right: -3px;
  z-index: 20;

  h3 {
    display: flex;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
  img {
    width: 50px;
  }
  @media screen and (min-width: 768px) {
    right: 0px;
  }
`;
