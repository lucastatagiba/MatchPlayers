import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 50px;
  width: 45px;
`;

export const TitleH3 = styled.h3`
  display: none;
  font-family: "Supermercado One", cursive;
  font-size: 24px;
  color: var(--color-primary);
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LogoName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0;
`;

export const Span = styled.span`
  display: none;
  font-family: "Supermercado One", cursive;
  font-size: 20px;
  color: var(--color-primary);
`;

export const DivsMenu = styled.div`
  width: 100%;
  border-top: 1px solid var(--Gray-3);
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-top: 5px;
  height: 100px;

  div:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const TitleH5 = styled.h5`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  gap: 15px 0;
`;

export const ModalMenu = styled.div`
  display: ${(props) => props.children[1].props.display};
  width: 80%;
  max-width: 380px;
  border-radius: 8px;
  position: absolute;
  top: 40px;
  flex-direction: column;
  margin-top: 20px;
  border: 2px solid var(--color-primary);
  background-color: var(--color-white);
  z-index: 3;

  div + div {
    border-top: 1px solid var(--grey-2);
    height: fit-content;
    padding: 10px;
  }
`;

export const CloseMenu = styled.div`
  font-size: 25px;
  width: 30px;
  left: 90%;
  align-items: flex-start;
  padding: 0px;
  z-index: 4;
  top: 1%;
`;

export const ModalConfig = styled.div`
  flex-direction: column;
  width: 320px;
  max-width: 360px;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: -3px;
  margin-top: 20px;
  padding: 20px 30px;
  border: 2px solid var(--color-primary);
  background-color: var(--color-white);
  z-index: 3;

  .upload {
    width: 25px;
    height: 25px;
    margin: 5px;
  }
`;

export const ImageLoading = styled.img`
  width: 50px;
  height: 50px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-white);
  border-bottom: 2px solid var(--grey-2);
  height: 65px;
  box-shadow: var(--box-shadow-soft);
  z-index: 5;

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
      display: flex;
      justify-content: center;
      font-size: 14px;
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
    }

    .upload {
      width: 25px;
      height: 25px;
      margin: 5px;
    }
  }
  .profilePhoto {
    width: 0px;

    .modalPhoto {
      display: none;
    }
  }

  .bigLogo {
    display: none;
  }
  div {
    display: flex;
    align-items: center;

    input {
      width: 100%;
    }
    svg {
      color: var(--grey-3);
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
        border: 2px solid var(--color-primary);
        background-color: var(--color-white);
        z-index: 3;
        .loading {
          width: 50px;
          height: 50px;
        }
      }
    }
    .modalPhoto :nth-child(2) {
      border-bottom: 1px solid var(--Gray-3);
    }
    .profilePhoto {
      width: 30px;

      position: relative;
      .modalPhoto {
        display: ${(props) =>
          props.children[2].props.children[5].props.children[1].props.display};
        width: 300px;
        padding: 0 50px 0 10px;
        background-color: white;
        border-radius: 8px;
        position: absolute;
        top: 50px;
        right: 5px;
        border: 2px solid var(--color-primary);
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
