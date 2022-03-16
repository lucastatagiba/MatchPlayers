import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid var(--Gray-2);
  .modalMenu {
    display: ${(props) => (!props.children[2].props.appear ? "none" : "flex")};
    width: 80%;
    max-width: 380px;
    height: 175px;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    flex-direction: column;
    margin-top: 20px;
    border: 2px solid var(--Blue-primary);
    div {
      width: 100%;
      border-top: 1px solid var(--Gray-3);
      display: flex;
      justify-content: center;
      font-size: 14px;
      padding-top: 5px;
    }
  }
  .modalMenu :nth-child(1) {
    border-top: none;
  }
  .modalConfig {
    display: ${(props) => (!props.children[3].props.appear ? "none" : "flex")};
    flex-direction: column;
    width: 80%;
    max-width: 380px;
    height: 300px;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    margin-top: 20px;
    padding-top: 20px;
    border: 2px solid var(--Blue-primary);
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
