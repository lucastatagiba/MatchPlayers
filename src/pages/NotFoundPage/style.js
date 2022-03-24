import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Background-Color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  &.logo-container {
    display: flex;
    flex-direction: row;
    color: var(--color-primary);
    align-items: center;
  }
`;

export const Text = styled.span`
  color: var(--color-primary);

  &.logo-container__text--top {
    font-family: "Supermercado One", cursive;
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 10px;
  }

  &.logo-container__text--bottom {
    font-family: "Supermercado One", cursive;
    font-size: 16px;
  }
  &.main__text--top {
    font-size: 24px;
  }
  &.main__text--bottom {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    &.logo-container__text--top {
      font-size: 34px;
    }
    &.logo-container__text--bottom {
      font-size: 26px;
    }
    &.main__text--top {
      font-size: 30px;
      margin-bottom: 30px;
    }
    &.main__text--bottom {
      margin-bottom: 30px;
      font-size: 22px;
    }
  }
`;

export const Image = styled.img`
  &.logo-container__image {
    height: 75px;
    width: 55px;
  }
  @media (min-width: 1024px) {
    &.logo-container__image {
      height: 110px;
      width: 80px;
    }
  }
`;

export const Caption = styled.figcaption`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: max-content;
`;

export const Box = styled.div`
  &.notfound-main {
    height: 400px;
    max-width: 400px;
    padding: 0px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    @media (min-width: 1024px) {
      height: 600px;
      max-width: 800px;
    }
  }
`;
