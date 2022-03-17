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
    button {
      font-size: 11px;
      margin-right: 3px;
      padding: 4px 7px;
    }
    select {
      font-size: 10px;
    }
  }
`;
