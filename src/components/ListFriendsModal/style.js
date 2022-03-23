import styled from "styled-components";

export const Container = styled.ul`
  position: absolute;
  z-index: 30;
  top: 120px;
  background-color: var(--White-primary);
  list-style: none;
  border-radius: 8px;
  height: max-content;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid var(--Blue-primary);
  max-height: 500px;
  overflow-y: auto;
  h5 {
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid var(--Gray-2);
    width: 100%;
    padding-bottom: 10px;
  }
  svg {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    color: var(--Gray-3);
  }
  li {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid var(--Gray-2);
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
  h2 {
    font-size: 14px;
  }
`;
