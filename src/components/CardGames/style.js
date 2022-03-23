import styled from "styled-components";

export const Container = styled.div`
  &.cardgames {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--grey-2);
    border-radius: ${({ size }) =>
      size === "small" ? "var(--radius-percent-50)" : "var(--radius-pixels-8)"};
    padding: 5px 5px;
    width: fit-content;
    height: fit-content;
    gap: 0 5px;
  }
`;

export const Image = styled.img`
  &.cardgames__game__image {
    border-radius: var(--radius-percent-50);
    width: 25px;
    height: 25px;
    object-fit: contain;

    @media only screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const Name = styled.h2`
  &.cardgames__game__name {
    display: ${({ size }) => (size === "small" ? "none" : "block")};
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
