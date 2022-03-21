import styled from "styled-components";

export const Container = styled.a`
  background-color: var(--White-primary);
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: var(--Gray-4);
  .info--news {
    h4 {
      font-size: 18px;
      color: var(--Black-primary);
    }
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 60px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .desc--news {
    img {
      width: 100%;
    }
    p {
      font-size: 16px;
      margin-top: 20px;
    }
  }
`;
