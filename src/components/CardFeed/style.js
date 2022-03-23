import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-white);
  border-radius: var(--radius-pixels-4);
  padding: 15px 0;
  min-height: 250px;
  gap: 15px 0;
  box-shadow: var(--box-shadow-smooth);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 0 10px;
`;

export const TrashButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: var(--grey-3);
  color: var(--grey-1);
  border: none;
  border-radius: var(--radius-pixels-8);
  padding: 5px 5px;
  margin-left: auto;
  transition: var(--transition-all-quick);

  :hover {
    background: var(--grey-1);
    color: var(--grey-3);
  }
`;

export const Photo = styled.img`
  border-radius: var(--radius-percent-50);
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Name = styled.h2`
  font: var(--title-16);
`;

export const Moment = styled.time`
  font: var(--text-12);
  color: var(--grey-3);
`;

export const GamesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 10px;
  gap: 0 15px;
`;

export const Body = styled.section``;

export const TextContent = styled.p`
  font: var(--text-14);
  letter-spacing: -0.25px;
  line-height: 1.25;
  color: var(--grey-4-semitransparent);
  margin-bottom: 15px;
  padding: 0 15px;
  width: 100%;
`;

export const ImageContainer = styled.figure`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Footer = styled.footer`
  padding: 0 15px;
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 0 50px;

  button {
    font: var(--text-14);
    background: transparent;
    color: var(--grey-4-semitransparent);

    :hover {
      background: var(--grey-4-semitransparent);
      color: var(--grey-1);
    }
  }
`;

export const CommentsCount = styled.span`
  font: var(--text-14);
  margin-left: auto;
  cursor: pointer;

  :hover {
    color: var(--color-lightblue);
    text-decoration: underline;
  }
`;

export const ContainerComments = styled.div`
  margin-top: 15px;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  position: relative;

  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 5px;
    border: 1.5px solid var(--color-primary);
    border-radius: var(--radius-percent-50);
    height: 30px;
    transition: all 0.2s ease-in;

    svg {
      transition: all 0.2s ease-in-out;
    }

    :hover {
      background: var(--grey-1);
      color: var(--color-primary);

      svg {
        transform: rotate(-0.15turn);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  textarea:focus + button {
    top: 60%;
  }
`;

export const TextArea = styled.textarea`
  font: var(--text-14);
  color: var(--grey-4-semitransparent);
  background: var(--color-background);
  border: none;
  border-radius: var(--radius-pixels-8);
  padding: 10px 15px;
  width: 100%;
  height: 40px;
  resize: none;
  transition: all 0.2s ease-in-out;

  :focus {
    outline: 1.5px solid var(--color-orange);
    height: 100px;
    transition: all 0.2s ease-in-out;
  }
`;

export const Comments = styled.ul`
  display: ${(props) => (props.modalOn ? "flex" : "none")};
  align-self: center;
  border-top: 1px solid var(--grey-2);
  list-style: none;
  width: 95%;
  padding-top: 10px;
  max-height: 110px;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  li {
    background-color: var(--color-background);
    border-radius: 8px;
    font-size: 12px;
    margin-bottom: 10px;
    width: max-content;
    padding: 8px 10px;
  }
`;
