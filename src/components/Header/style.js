import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid var(--Gray-2);
  figure {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logoName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    h3 {
      display: none;
      font-family: "Supermercado One", cursive;
      font-size: 24px;
      color: var(--Blue-primary);
    }
    span {
      display: none;
      font-family: "Supermercado One", cursive;
      font-size: 20px;
      color: var(--Blue-primary);
    }
  }
  .close {
    position: absolute;
    left: 358px;
    bottom: 172px;
    font-size: 24px;
  }
  .close:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  .modalMenu {
    display: ${(props) => (!props.children[1].props.appear ? "none" : "flex")};
    width: 80%;
    max-width: 380px;
    height: 175px;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    flex-direction: column;
    margin-top: 20px;
    border: 2px solid var(--Blue-primary);
    background-color: white;
    z-index: 3;

    .close {
      font-size: 24px;
      width: 25px;
    }

    div {
      width: 100%;
      border-top: 1px solid var(--Gray-3);
      display: flex;
      justify-content: center;
      font-size: 14px;
      padding-top: 5px;
    }
    div:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
  .modalMenu :nth-child(1) {
    border-top: none;
  }
  .modalConfig {
    display: ${(props) => (!props.children[2].props.appear ? "none" : "flex")};
    flex-direction: column;
    width: 80%;
    max-width: 380px;
    height: 300px;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    margin-top: 20px;
    padding: 20px 30px;
    border: 2px solid var(--Blue-primary);
    background-color: white;
    z-index: 3;
    .close {
      left: 358px;
      bottom: 297px;
    }
    .upload {
      width: 25px;
      height: 25px;
      margin: 5px;
    }
    h5 {
      display: flex;
      align-items: center;
    }
  }
  .modalPhoto {
    display: none;
  }

  .logoimg {
    height: 50px;
    width: 45px;
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
      display: ${(props) => props.children[2].props.appear && "flex"};
      width: 80%;
      max-width: 380px;
      background-color: white;
      border-radius: 8px;
      top: 60px;
      .close {
        left: 356px;
        bottom: 297px;
        font-size: 24px;
      }
      h5 {
        display: flex;
        align-items: center;
      }
    }
    .modalPhoto :nth-child(2) {
      border-bottom: 1px solid var(--Gray-3);
    }
    .modalPhoto {
      display: ${(props) => props.children[3].props.appear && "inline"};
      width: 150px;
      height: 55px;
      background-color: white;
      border-radius: 8px;
      position: absolute;
      top: 8.5%;
      left: 73%;
      border: 2px solid var(--Blue-primary);
      justify-content: space-between;
      z-index: 3;
      div {
        font-size: 12px;
        height: 26px;
        align-items: center;
        justify-content: center;
      }
      div:hover {
        cursor: pointer;
        opacity: 0.5;
      }
      .close {
        left: 128px;
        bottom: 50px;
        font-size: 24px;
      }
    }
    .logoName {
      h3 {
        display: block;
      }
      span {
        display: block;
      }
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
