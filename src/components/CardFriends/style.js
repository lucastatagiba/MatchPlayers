import styled from "styled-components";

export const Container = styled.li`
  &.cardfriends {
    display: flex;
    align-items: center;
    background: transparent;
    width: 100%;
    gap: 0 5px;
    transition: var(--transition-all-fast);
    cursor: pointer;
  }

  &.cardfriends > svg {
    width: 15px;
    height: 15px;
    margin-left: auto;
  }
`;

export const Image = styled.img`
  &.cardfriends__image {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
`;

export const Name = styled.strong`
  &.cardfriends__name {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
