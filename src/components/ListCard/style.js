import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  width: 95%;
  max-width: 450px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;
