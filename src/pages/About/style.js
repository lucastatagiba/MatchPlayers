import styled from "styled-components";

export const Container = styled.main`
  &.about {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    min-height: 100vh;
  }
`;

export const LogoContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 110px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Caption = styled.figcaption`
  font-family: "Supermercado One";
  text-align: center;
`;

export const Text = styled.span`
  color: var(--color-primary);

  &.text--top {
    display: block;
    font-size: 40px;
  }

  &.text--bottom {
    display: block;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    &.text--top {
      display: block;
      font-size: 45px;
    }

    &.text--bottom {
      display: block;
      font-size: 20px;
    }
  }
`;

export const DevelopersList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin: 50px 0;

  @media only screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`;
