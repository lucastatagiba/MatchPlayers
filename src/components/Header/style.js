import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid var(--Gray-2);
  .modalMenu {
    display: ${(props) => !props.children[2].props.$appear && "none"};
    width: 80%;
    max-width: 380px;
    height: 400px;
    background-color: var(--Gray-2);
    border-radius: 8px;
    position: absolute;
    top: 60px;
  }
  .modalConfig,
  .modalPhoto {
    display: none;
  }

  .logoimg {
    height: 50px;
    width: 50px;
  }
  .bigLogo {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      width: 100%;
    }
    svg {
      color: var(--Gray-3);
    }
    .userimg,
    .houseIcon,
    .messageIcon,
    .configIcon {
      display: none;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    .modalMenu {
      display: none;
    }
    .modalConfig {
      display: ${(props) => props.children[3].props.appear && "inline"};
      width: 80%;
      max-width: 380px;
      height: 400px;
      background-color: var(--Gray-2);
      border-radius: 8px;
      position: absolute;
      top: 60px;
    }
    .modalPhoto {
      display: ${(props) => props.children[4].props.appear && "inline"};
      width: 80%;
      max-width: 380px;
      height: 400px;
      background-color: var(--Gray-2);
      border-radius: 8px;
      position: absolute;
      top: 60px;
    }
    .bigLogo {
      height: 50px;
      width: fit-content;
      display: inline;
    }
    .logoimg {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      .menu {
        display: none;
      }

      .houseIcon,
      .messageIcon,
      .configIcon {
        display: inline;
        color: var(--Gray-3);
        width: 30px;
        height: 30px;
      }
      .userimg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline;
      }
    }
  }
`;
