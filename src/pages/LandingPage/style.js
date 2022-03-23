import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { Button as muiButton } from "@mui/material";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    background: linear-gradient(
      90deg,
      var(--color-primary) 40%,
      var(--color-orange) 100%
    );
  }
`;

export const ContainerTitle = styled.div`
  width: 208px;
`;

export const Image = styled.img`
  height: 80px;
  width: 60px;
`;

export const Span = styled.span`
  display: flex;
  font-family: "Supermercado One", cursive;
  font-size: 20px;
  color: var(--color-primary);
  width: 208px;
`;

export const SpanCadastreSe = styled.span`
  font-family: Arial, Helvetica, sans-serif;
`;

export const LogoContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 110px;
`;

export const TitlePresentation = styled.h3`
  font-family: "Roboto Mono", monospace;
  font-size: 34px;
`;

export const SpanLeft = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 24px;
  display: flex;
  flex-wrap: nowrap;
  width: 340px;
`;

export const TitleH3 = styled.h3`
  font-family: "Supermercado One", cursive;
  font-size: 26px;
  color: var(--color-primary);
  margin-bottom: 10px;
  font-weight: 900px;
`;

export const FigureDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  width: 426px;
  text-align: center;
  color: white;
  font-family: "Roboto Mono", monospace;
`;

export const DivLogo = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  padding-bottom: 70px;
  cursor: pointer;
`;

export const ButtonEntrar = muiStyled(muiButton)`
margin: 12px 0;
background-color: var(--color-primary);
transition: 0.2s;
:hover {
  background-color: var(--color-lightblue);
  opacity: 0.8;
}
`;

export const Form = styled.form`
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

  span {
    margin-left: 10px;
    align-self: start;
    color: red;
    font-size: 12px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  width: 280px;
  padding-top: 25px;
  border-radius: 8px;
  padding-bottom: 12px;
`;

export const Link = styled(ReactRouterDomLink)`
  margin-left: 5px;
  color: #2b4c64;
`;
