import styled from "styled-components";

export const Container = styled.div`
  &.news {
    background-color: var(--White-primary);
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 20px;
    text-decoration: none;
    color: var(--Gray-4);
  }
  &.cardnews {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  &.cardnews__logo {
    width: 60px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &.cardnews__photo {
    width: 100%;
  }
`;

export const Text = styled.span`
  &.cardnews__title {
    font-size: 18px;
    color: var(--color-black);
  }
  &.cardnews__description {
    font-size: 14px;
    margin-top: 20px;
  }
`;
