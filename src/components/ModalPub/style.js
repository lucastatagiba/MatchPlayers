import styled from "styled-components";

export const Container = styled.div`
  &.modal {
    position: absolute;
    top: 75px;
    left: 0px;
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    padding: 10px;
    background-color: var(--color-white);
    z-index: 10;
    svg {
      cursor: pointer;
    }
  }

  &.modal__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-3);
    svg {
      font-size: 25px;
    }
  }

  &.modal__content {
    margin-top: 10px;
    display: flex;
    width: 100%;
  }

  &.modal__footer {
    padding-top: 10px;
    display: flex;
    width: 90%;
    justify-content: end;
    gap: 20px;
    svg {
      text-align: center;
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.span`
  &.header__text {
    font-size: 22px;
    font-weight: 500;
  }
`;

export const Image = styled.img`
  &.content__userphoto {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  &.content__imagepreview {
    margin: 0 auto;
    width: 80%;
    height: 60%;
    border-radius: 0%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const TextArea = styled.textarea`
  height: 160px;
  width: 90%;
  max-width: 90%;
  padding-left: 10px;
  margin-left: 10px;
  padding-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: var(--grey-2);
  color: var(--color-secondary-1);
  ::placeholder {
    color: var(--color-secondary-1);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 2px 8px;
  background-color: #f75f30;
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
`;
