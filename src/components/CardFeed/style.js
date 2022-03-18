import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  min-height: 235px;
  border: transparent;
  border-radius: 8px;
  background-color: var(--White-primary);
  margin: 0 auto;
  margin-bottom: 10px;
  svg {
    margin-top: 10px;
    margin-right: 10px;
    align-self: flex-end;
    cursor: pointer;
  }

  .postContent {
    min-height: 50px;
  }
  .imageBox {
    display: flex;
    justify-content: center;
    margin: 5px 0px;
    padding: 0 5px;
  }
  .postImage {
    height: auto;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
  .postText {
    font-size: 12px;
    margin: 20px 16px;
  }
  .userInformation {
    height: 36px;
    align-items: center;
    padding-left: 4px;
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    .gameContent {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  .userName {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 8px;
    margin-left: 10px;
    span {
      color: var(--Gray-3);
    }
  }
  .likes {
    display: flex;
    width: 300px;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    margin-top: 2px;
    color: var(--Gray-4);
    span {
      font-size: 10px;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  input {
    width: 260px;
    height: 15px;
    font-size: 10px;
    margin: 5px auto;
    background-color: #f3f2ef;
    border: none;
    border-radius: 4px;
  }
  .gameName {
    display: none;
  }
  .game {
    display: flex;
    background-color: var(--Gray-2);
    border-radius: 8px;
    margin-left: 5px;
  }
  button {
    margin: 5px 0;
    text-align: start;
    align-self: center;
    width: 95%;
    background-color: var(--Background-Color);
    color: var(--Color-Secondary);
    font-size: 12px;
    height: max-content;
    padding: 2px 0;
    padding-left: 15px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 500px;
    min-height: 235px;

    .userInformation {
      height: 86px;
    }
    .gameName {
      display: flex;
      border-radius: 8px;
      padding: 2px;
    }
    .postText {
      font-size: 16px;
      width: fit-content;
      margin-bottom: 20px;
    }
    .likes {
      width: 500px;
      font-size: 20px;
      margin-top: 10px;
      color: var(--Gray-4);
      padding: 0px 25px;
      span {
        font-size: 16px;
      }
      div {
      }
    }
    input {
      width: 475px;
      height: 24px;
      margin-top: 10px;
      font-size: 16px;
    }
  }
`;

export const Box = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;

  .gameLogo {
    max-width: 18px;
    max-height: 18px;
    background-color: #f3f2ef;
    padding: 1px;
    border-radius: 50%;
  }
  .userPhoto {
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    margin: 8px 0px 5px 12px;
  }
  h3 {
    font-size: 10px;
  }
  span {
    font-weight: 500;
    font-size: 6px;
    margin-right: 5px;
  }
  @media screen and (min-width: 1024px) {
    .userPhoto {
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
      margin: 8px 0px 5px 12px;
    }
    .gameLogo {
      margin-left: 4px;
    }
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 10px;
    }
  }
`;
