import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 540px;
  border: 1px solid var(--Blue-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: var(--White-primary);
  margin-left: 180px;
  margin-top: 160px;
  z-index: 10;
  svg {
    cursor: pointer;
  }
  h1 {
    font-size: 22px;
    font-weight: 500;
  }
  .headerModalPub {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--Gray-3);
    svg {
      font-size: 25px;
    }
  }
  .ContainModalPub {
    margin-top: 10px;
    display: flex;
    width: 100%;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .rightSidePub {
      width: 100%;
      textarea {
        height: 160px;
        width: 90%;
        max-width: 90%;
        padding-left: 10px;
        margin-left: 10px;
        padding-top: 10px;
        border: none;
        border-radius: 8px;
        background-color: var(--Gray-2);
        color: var(--Blue-secundary);
        ::placeholder {
          color: var(--Blue-secundary);
        }
      }
      .buttonsModalPub {
        padding-top: 10px;
        display: flex;
        width: 90%;
        justify-content: end;
        gap: 20px;
        svg {
          text-align: center;
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
        label {
          display: flex;
          align-items: center;
          width: max-content;
          padding: 2px 8px;
          background-color: #f75f30;
          border-radius: 8px;
          color: var(--White-primary);
        }
        input {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 400px;
    margin: 150px auto;
  }
`;
