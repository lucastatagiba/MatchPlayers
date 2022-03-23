import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--Background-Color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  figure {
    display: flex;
    height: max-content;
    cursor: pointer;
    div {
      width: max-content;
      h3 {
        font-family: "Supermercado One", cursive;
        font-size: 26px;
        color: var(--Blue-primary);
        margin-bottom: 10px;
      }
      span {
        font-family: "Supermercado One", cursive;
        font-size: 20px;
        color: var(--Blue-primary);
      }
    }
    img {
      height: 80px;
      width: 60px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    background-color: none;
    background: linear-gradient(
      90deg,
      rgba(247, 95, 48, 1) 0%,
      rgba(6, 37, 67, 1) 60%
    );
  }
`;

export const FigureDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    img {
      height: 150px;
      width: 110px;
    }
    p {
      font-size: 20px;
      width: 426px;
      text-align: center;
      color: white;
    }
  }
`;
export const DivLogo = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  padding-bottom: 70px;
  cursor: pointer;
  h3 {
    font-size: 34px;
  }
  span {
    font-size: 24px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--White-primary);
  width: 280px;
  padding-top: 25px;
  border-radius: 8px;
  padding-bottom: 12px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      svg {
        width: 20px;
        position: relative;
        top: 5px;
        right: 25px;
        cursor: pointer;
      }
    }
    div:nth-child(9) {
      margin-left: 20px;
    }
    button {
      margin: 12px 0;
      background-color: var(--Blue-primary);
      transition: 0.2s;
      :hover {
        background-color: var(--Blue-primary);
        opacity: 0.8;
      }
    }
    span {
      margin-left: 25px;
      align-self: start;
      color: red;
      font-size: 12px;
    }
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Link = styled(ReactRouterDomLink)`
  margin-left: 5px;
  color: #2b4c64;
`;
