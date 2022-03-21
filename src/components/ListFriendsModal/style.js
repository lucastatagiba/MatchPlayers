import styled from "styled-components";

export const Container = styled.ul`
  position: absolute;
  z-index: 30;
  top: 100px;
  background-color: var(--White-primary);
  list-style: none;
  border-radius: 8px;
  height: max-content;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--Blue-primary);
  max-height: 500px;
  overflow-y: auto;
  h3 {
    font-size: 26px;
    text-align: center;
    border-bottom: 1px solid var(--Gray-2);
    width: 100%;
  }
  svg {
    align-self: flex-end;
    width: 30px;
    height: 30px;
  }
  li {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid var(--Gray-2);
  }
  img {
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
