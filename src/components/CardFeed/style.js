import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  min-height: 235px;
  border: transparent;
  border-radius: 8px;
  background-color: white;

  .postContent {
    min-height: 50px;
  }
  .imageBox {
    display: flex;
    justify-content: center;
    margin: 5px 0px;
  }
  .postImage {
    height: auto;
    width: auto;
    max-width: 300px;
  }
  .postText {
    font-size: 10px;
    width: 275px;
    margin: 0px 16px;
  }
  .userInformation {
    height: 36px;
    align-items: center;
    padding-left: 4px;
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
`;

export const Box = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;

  .gameLogo {
    max-width: 14px;
    max-height: 14px;
    margin-left: 4px;
    background-color: #f3f2ef;
    padding: 1px;
    border-radius: 50%;
  }
  .userPhoto {
    max-width: 25px;
    max-height: 25px;
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
`;
