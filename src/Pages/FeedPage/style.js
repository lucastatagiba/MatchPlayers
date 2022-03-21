import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  .leftAside {
    display: none;
    flex-direction: column;

    .divProfile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--White-primary);
      width: 180px;
      border-radius: 8px;
      img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        cursor: pointer;
        margin-bottom: 10px;
      }
      h2 {
        cursor: pointer;
      }
      .gameContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
        margin-top: 20px;
        div {
          display: flex;
          justify-content: flex-start;
          height: max-content;
          width: 150px;
          margin-right: 0;
          margin-bottom: 10px;
          max-width: 150px;
          h2 {
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          img {
            width: 20px;
            height: 20px;
            margin-bottom: 0px;
          }
        }
      }
    }
    .divSchedules {
      height: max-content;
      border-radius: 8px;
      background-color: var(--White-primary);
      margin-top: 15px;
      width: 180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px 0;
      h3 {
        font-size: 18px;
      }
      span {
        font-size: 16px;
        background-color: var(--Gray-2);
        padding: 2px;
        border-radius: 5px;
      }
    }
  }
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
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
    margin: 12px 0;
    div {
      display: flex;
    }
    button {
      font-size: 11px;
      margin-right: 3px;
      padding: 0px 7px;
      height: max-content;
      padding: 5px 8px;
    }
    select {
      text-align: center;
      font-size: 10px;
      background-color: var(--Blue-primary);
      color: var(--White-primary);
      border-radius: 8px;
      padding: 2px;
      cursor: pointer;
    }
  }
  .divStartPub {
    position: relative;
    display: flex;
    width: 95%;
    background-color: var(--White-primary);
    padding: 0 10px;
    height: 75px;
    align-items: center;
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
        height: max-content;
      }
      .buttonPubDiv {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        padding: 0 5px;
        width: 95%;
      }
    }
  }
  .rightAside {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .divButtonsFeed {
      min-width: 450px;
      width: 100%;
      div {
        button {
          font-size: 14px;
        }
      }
      select {
        font-size: 12px;
      }
    }
    .divStartPub {
      min-width: 450px;
      width: 100%;
      height: 100px;
      .containPubDiv {
        .buttonPubDiv {
          :first-child {
            background-color: var(--Orange-primary);
          }
        }
        button {
          font-size: 16px;
        }
      }
    }
    .leftAside {
      display: flex;
      align-items: center;
      margin-right: 15px;
      margin-top: 12px;
      width: 200px;
    }
    .rightAside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 12px;
      margin-left: 15px;
      align-items: center;
      border-radius: 8px;
      background-color: var(--White-primary);
      height: max-content;
      padding-bottom: 20px;
      min-width: 120px;
      width: 80%;
      max-width: 162px;
      h3 {
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid var(--Gray-3);
        padding: 10px 0;
        width: 100%;
      }
      ul {
        width: 100%;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      li {
        display: flex;
        gap: 10px;
        padding: 10px;
        align-items: center;
        border-bottom: 1px solid var(--Gray-3);
        width: 100%;
        cursor: pointer;
        justify-content: center;
        img {
        }

        h2 {
          display: none;
          width: 50%;
          font-size: 1rem;
          text-overflow: ellipsis;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .divButtonsFeed {
      min-width: 500px;
    }
    .divStartPub {
      min-width: 500px;
    }
    .rightAside {
      ul {
        li {
          h2 {
            display: block;
          }
        }
      }
    }
  }
`;
