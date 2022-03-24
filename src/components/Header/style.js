import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  max-width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid var(--Gray-2);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-soft);
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
    top: 2%;
    right: 2.5%;
    font-size: 30px;
    width: 25px;
  }
  .close:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  .modalMenu {
    display: ${(props) => props.children[1].props.display};
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
      font-size: 25px;
      width: 30px;
      left: 90%;
      align-items: flex-start;
      padding: 0px;
      z-index: 4;
      top: 1%;
    }

    div:nth-child(2) {
      border: none;
    }

    div {
      width: 100%;
      border-top: 1px solid var(--Gray-3);
      display: flex;
      justify-content: center;
      font-size: 14px;
      padding-top: 5px;
      height: 100px;
    }
    div:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
  .modalMenu :nth-child(1) {
    border-top: none;
  }
  .configDiv {
    width: 0px;
    height: 100px;
    position: relative;

    .modalConfig {
      display: ${(props) =>
        props.children[2].props.children[4].props.children[1].props.display};
      flex-direction: column;
      width: 320px;
      max-width: 360px;
      border-radius: 8px;
      position: absolute;
      top: 60px;
      right: -3px;
      margin-top: 20px;
      padding: 20px 30px;
      border: 2px solid var(--Blue-primary);
      background-color: var(--Gray-1);
      z-index: 3;
      .loading {
        width: 50px;
        height: 50px;
      }
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
  .profilePhoto {
    width: 0px;
    height: 100px;
    .modalPhoto {
      display: none;
    }
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
    gap: 0px;
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
  form {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: 100%;
    gap: 15px 0;

    button {
      margin-bottom: 25px;
    }
  }

  @media screen and (min-width: 768px) {
    .modalMenu {
      display: none;
    }
    .configDiv {
      width: 30px;
      height: 100px;
      position: relative;

      .modalConfig {
        display: ${(props) =>
          props.children[2].props.children[4].props.children[1].props.display};
        flex-direction: column;
        width: 320px;
        max-width: 360px;
        border-radius: 8px;
        position: absolute;
        top: 60px;
        right: 10px;
        margin-top: 20px;
        padding: 20px 30px;
        border: 2px solid var(--Blue-primary);
        background-color: var(--Gray-1);
        z-index: 3;
        .loading {
          width: 50px;
          height: 50px;
        }
      }

      h5 {
        display: flex;
        align-items: center;
      }
    }
    .modalPhoto :nth-child(2) {
      border-bottom: 1px solid var(--Gray-3);
    }
    .profilePhoto {
      width: 30px;
      height: 100px;
      position: relative;
      .modalPhoto {
        display: ${(props) =>
          props.children[2].props.children[5].props.children[1].props.display};
        width: 300px;
        height: 80px;
        padding: 0 50px 0 10px;
        background-color: white;
        border-radius: 8px;
        position: absolute;
        top: 80px;
        right: 5px;
        border: 2px solid var(--Blue-primary);
        justify-content: space-between;
        z-index: 3;
        .modalPhotoText {
          font-size: 16px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }
        .modalPhotoText2 {
          font-size: 18px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }
      }

      div:hover {
        cursor: pointer;
      }
      .close {
        left: 82%;
        bottom: 95%;
        font-size: 30px;
        margin: none;
        height: 40px;
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
