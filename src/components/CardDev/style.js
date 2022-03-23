import styled from "styled-components";

import { Link as ReactRouterDOMLink } from "react-router-dom";

export const Container = styled.li``;

export const CardContainer = styled.div`
  &.card-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const BoxContainer = styled.div`
  &.box-container {
    position: relative;
    width: 208px;
    height: 208px;
    margin: 32px;
  }
`;

export const ImageContainer = styled.figure`
  &.image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .box-container:hover &.image-container {
    transform: translate(-56px, -56px);
  }
`;

export const Image = styled.img`
  &.image-container__image {
    width: 208px;
    height: 208px;
    object-fit: cover;
    resize: both;
    border-radius: var(--radius-pixels-10);
  }
`;

export const ContentContainer = styled.div`
  &.content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: var(--color-white);
    z-index: 1;
    align-items: center;
    transition: 0.5s ease-in-out;
    font-size: 45px;
    color: var(--color-lightblue);
    border-radius: var(--radius-pixels-10);
    box-shadow: var(--box-shadow-soft);
  }

  .box-container:hover &.content-container {
    transform: translate(56px, 56px);
  }
`;

export const Link = styled(ReactRouterDOMLink)`
  margin-left: auto;

  svg {
    font-size: 45px;
    color: var(--color-lightblue);
  }
`;

export const Name = styled.h2`
  &.content-container__name {
    display: block;
    font-size: 17.5px;
    color: var(--color-primary);
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 1px;
  }
`;

export const Role = styled.strong`
  &.content-container__role {
    color: var(--grey-3);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
  }
`;
