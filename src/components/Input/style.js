import styled from "styled-components";

export const Container = styled.div`
  &.input {
    position: relative;
    width: ${(props) => props.width}px;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#F3F2EF")};
    color: ${(props) => (props.color ? props.color : "#6C8394")};
    padding: 5px 8px;
    border: ${(props) => (props.border ? "1px solid var(--grey-3)" : "none")};
    border-radius: ${(props) => (props.bdradius ? props.bdradius : "8px")};
    cursor: pointer;
    height: ${(props) => (props.height ? props.height : "30px")};
  }
  &.results {
    display: ${(props) => props.display}!important;
    flex-direction: column;
    align-items: start !important;
    padding: 5px;
    border: 1px solid var(--grey-3);
    border-radius: 8px;
    width: 300px;
    background-color: var(--grey-1);
    position: absolute;
    top: 30px;
    right: -3px;
    z-index: 20;
    @media screen and (min-width: 768px) {
      right: 0px;
    }
  }
  &.usercard__userinformation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  &.usercard__usergames {
    display: flex;
    flex-wrap: wrap;
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
  overflow-x: auto;
  width: 100%;
`;

export const ContainerLi = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--grey-3);
  align-items: center;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Text = styled.span``;
