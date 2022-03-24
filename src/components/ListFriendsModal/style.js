import styled from "styled-components";

export const Container = styled.ul`
  position: absolute;
  z-index: 30;
  top: 120px;
  background-color: var(--color-white);
  list-style: none;
  border-radius: 8px;
  height: max-content;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid var(--color-primary);
  max-height: 500px;
  overflow-y: auto;

  svg {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    color: var(--grey-3);
  }
`;

export const ListItem = styled.li`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid var(--grey-2);
  align-items: center;
`;

export const Text = styled.span`
  &.friendslist__title {
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid var(--grey-3);
    width: 100%;
    padding-bottom: 10px;
  }
  &.friendslist__friendname {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  &.friendslist__userphoto {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
