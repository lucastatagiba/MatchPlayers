import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Background-Color);
  max-width: 1000px;
  .leftAside {
    display: flex;
    flex-direction: column;
    align-items: center;
    .asideProfile {
      background-color: var(--White-primary);
      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
    }
  }
`;
