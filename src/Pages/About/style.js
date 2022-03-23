import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Background-Color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
  .logoimg {
    height: 80px;
    width: 60px;
  }
  ul {
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
  }
  figure {
    display: flex;
    h3 {
      font-family: "Supermercado One", cursive;
      font-size: 26px;
      color: var(--Blue-primary);
      margin-bottom: 10px;
      margin-top: 10px;
    }
    span {
      font-family: "Supermercado One", cursive;
      font-size: 20px;
      color: var(--Blue-primary);
    }
  }
  @media (min-width: 1024px) {
    figure {
      h3 {
        font-size: 36px;
        margin-bottom: 10px;
        margin-top: 0px;
      }
      span {
        font-size: 28px;
      }
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      min-height: 400px;
      height: fit-content;
      max-width: 100%;
    }
  }
`;

export const Box = styled.div`
  min-height: 400px;
  max-height: fit-content;
  max-width: 400px;
  padding: 0px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  @media (min-width: 1024px) {
    min-height: 800px;
    max-width: 1800px;
  }
`;
