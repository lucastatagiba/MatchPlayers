import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 450px;
  list-style: none;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;
