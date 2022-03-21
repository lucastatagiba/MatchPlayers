import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--Background-Color);
  border-radius: 5px;
  padding: 2.5px 5px;
  max-width: 95px;
  gap: 0 2.5px;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 25px;
  height: 25px;
`;

export const Name = styled.h2`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
