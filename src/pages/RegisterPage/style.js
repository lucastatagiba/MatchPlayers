import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { Button as muiButton } from "@mui/material";

export const Container = styled.main`
  &.register {
    background-color: var(--Background-Color);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    &.register {
      flex-direction: row-reverse;
      justify-content: space-around;
      background-color: none;
      background: linear-gradient(
        90deg,
        rgba(247, 95, 48, 1) 0%,
        rgba(6, 37, 67, 1) 60%
      );
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;

  &.logo-container {
    padding-bottom: 70px;
  }
  &.form-logo-container {
    padding-bottom: 0px;
  }
`;

export const Caption = styled.figcaption`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: max-content;
`;

export const Text = styled.span`
  color: var(--color-primary);

  &.logo-container__text--top {
    font-family: "Supermercado One", cursive;
    font-size: 34px;
    color: var(--color-white);
    margin-bottom: 10px;
  }

  &.logo-container__text--bottom {
    font-family: "Supermercado One", cursive;
    font-size: 24px;
    color: var(--color-white);
  }

  &.register-right__text {
    font-size: 20px;
    width: 426px;
    text-align: center;
    color: white;
  }

  &.text--error {
    margin-left: 25px;
    align-self: start;
    color: red;
    font-size: 12px;
  }
  &.form-logo-container__text--top {
    font-family: "Supermercado One", cursive;
    font-weight: bold;
    font-size: 26px;
  }
  &.form-logo-container__text--bottom {
    font-family: "Supermercado One", cursive;
    font-size: 20px;
  }
  &.form-footer__text {
  }
  &.form-footer__link {
    color: var(--color-lightblue);
    font-size: 14px;
  }
`;

export const Image = styled.img`
  &.logo-container__image {
    height: 150px;
    width: 110px;
  }
  &.form-logo-container__image {
    height: 80px;
    width: 60px;
  }
`;

export const RightContainer = styled.div`
  &.register-right {
    display: none;
  }
  @media (min-width: 1024px) {
    &.register-right {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const BoxForm = styled.div`
  &.form-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-white);
    width: 280px;
    padding-top: 25px;
    border-radius: 8px;
    padding-bottom: 12px;
  }
`;

export const FormContainer = styled.form`
  &.form-box__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  &.input-container {
  }

  &.input-container--password {
    margin-left: 20px;
    svg {
      width: 20px;
      position: relative;
      top: 5px;
      right: 25px;
      cursor: pointer;
    }
  }
`;

export const Button = muiStyled(muiButton)`
  margin: 10px 0px ;
  background-color: var(--color-primary);
  transition: 0.2s;
    :hover {
        background-color: var(--color-lightblue);
        opacity: 0.8;
    }
`;

export const Link = styled(ReactRouterDomLink)`
  margin-left: 5px;
  color: #2b4c64;
`;
