import styled from "styled-components";

export const Container = styled.div`
<<<<<<< Updated upstream
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
=======
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey-2);
  border-radius: ${({ size }) =>
    size === "small" ? "var(--radius-percent-50)" : "var(--radius-pixels-8)"};
  padding: 5px 10px;
  width: fit-content;
  max-width: 150px;
  height: fit-content;
  gap: 0 5px;
  box-shadow: var(--box-shadow-soft);
>>>>>>> Stashed changes
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
    font: var(--text-12);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
