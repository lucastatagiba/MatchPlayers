import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  width: 185px;
  gap: 0 5px;

  & > svg {
    width: 15px;
    height: 15px;
    margin-left: auto;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

export const Name = styled.strong`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
