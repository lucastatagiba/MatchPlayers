import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--Background-Color);
  border-radius: 8px;
  padding: 2.5px 5px;
  gap: 0 2.5px;
  margin-right: 10px;
  @media (min-width: 1024px) {
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 2px 5px;
    max-width: 95px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  object-fit: contain;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const Name = styled.h2`
  display: ${(props) => (props.display ? "block" : "none")};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 1024px) {
    display: block;
  }
`;
