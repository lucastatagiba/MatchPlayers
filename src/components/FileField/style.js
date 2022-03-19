import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  cursor: pointer;

  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.8);
  }

  &:active {
    border: 1.5px solid transparent;
    outline: 2px solid #1976d2;
  }

  &:active > span {
    color: #1976d2;
  }
`;

export const Label = styled.span`
  position: absolute;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => {
    switch (props.selected) {
      case "translated":
        return "12.5px";

      default:
        return "16px";
    }
  }};
  text-align: center;
  background: white;
  color: rgba(0, 0, 0, 0.6);
  min-width: ${(props) => {
    switch (props.selected) {
      case "translated":
        return "100px";

      default:
        return "";
    }
  }};
  height: 15px;
  transform: ${(props) => {
    switch (props.selected) {
      case "translated":
        return "translate(-2px, -20px)";

      default:
        return "";
    }
  }};
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
`;

export const FileName = styled.span`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 1);
  max-width: 100%;
`;

export const Input = styled.input`
  display: none;
`;
