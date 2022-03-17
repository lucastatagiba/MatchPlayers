import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  .leftAside {
    display: none;
    flex-direction: column;

    .divProfile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--White-primary);
      width: 100%;
      border-radius: 8px;
      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
    }
    .divSchedules {
      height: 110px;
      border-radius: 8px;
      background-color: var(--White-primary);
      margin-top: 15px;
    }
  }
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .divButtonsFeed {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--White-primary);
    height: 50px;
    border-radius: 8px;
    padding: 0 10px;
    width: 95%;
    max-width: 450px;
    margin: 12px 0;
    button {
      font-size: 11px;
      margin-right: 3px;
      padding: 0px 7px;
    }
    select {
      text-align: center;
      font-size: 10px;
      background-color: var(--Blue-primary);
      color: var(--White-primary);
      border-radius: 8px;
      padding: 2px;
    }
  }
  .divStartPub {
    display: flex;
    width: 95%;
    background-color: var(--White-primary);
    padding: 0 10px;
    height: 75px;
    align-items: center;
    max-width: 450px;
    margin-bottom: 12px;
    border-radius: 8px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
    .containPubDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-radius: 8px;
      button {
        font-size: 12px;
        text-align: start;
      }
      .buttonPubDiv {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        padding: 0 5px;
        width: 100%;
      }
    }
  }
  .rightAside {
    display: none;
  }
`;
