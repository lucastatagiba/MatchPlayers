import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  border: 1px solid var(--Blue-primary);
  border-radius: 8px;
  padding: 10px;
  background-color: var(--White-primary);
  h1 {
    font-size: 22px;
    font-weight: 500;
    border-bottom: 1px solid var(--Gray-3);
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
      }
    }
  }
`;
