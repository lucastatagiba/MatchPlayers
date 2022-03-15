import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--Background-Color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  figure {
    display: flex;
    height: max-content;
    margin-bottom: 190px;
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
    padding-top: 0;
    padding-right: 20vw;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;
    figure {
      margin-bottom: 30px;
    }
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
    div:nth-child(3) {
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
      margin-left: 10px;
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
