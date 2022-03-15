import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Background-Color);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      background-color: var(--Blue-primary);
    }
  }
`;
