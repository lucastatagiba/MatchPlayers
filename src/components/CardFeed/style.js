import styled from "styled-components";

export const Container = styled.li`
  &.cardfeed {
    background: var(--color-white);
    padding: 15px 0;
    min-height: 180px;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    &.cardfeed {
      border-radius: var(--radius-pixels-4);
    }
  }
`;

export const Header = styled.header`
  &.cardfeed-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 15px;
    gap: 0 10px;
  }
`;

export const Photo = styled.img`
  &.cardfeed-header__photo {
    border-radius: var(--radius-percent-50);
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  &.info-container {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const Name = styled.h2`
  &.info-container__name {
    font: var(--title-16);
    cursor: pointer;
  }
`;

export const Moment = styled.time`
  &.info-container__ {
  }
  font: var(--text-12);
  color: var(--grey-3);
`;

export const GamesList = styled.ul`
  &.games-list {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 10px;
    gap: 5px 5px;
  }

  @media only screen and (min-width: 1024px) {
    &.games-list {
      display: flex;
    }
  }
`;

export const TrashButton = styled.button`
  &.cardfeed-header__delete {
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
  }

  @media only screen and (min-width: 1024px) {
    &.cardfeed-header__delete:hover {
      background: var(--grey-1);
      color: var(--grey-3);
    }
  }
`;

export const Body = styled.section`
  &.cardfeed-body {
    margin-bottom: 15px;
  }
`;

export const TextContent = styled.p`
  &.cardfeed-body__text-content {
    font: var(--text-14);
    letter-spacing: -0.25px;
    line-height: 1.25;
    color: var(--grey-4-semitransparent);
    margin-bottom: 15px;
    padding: 0 15px;
    width: 100%;
  }
`;

export const ImageContainer = styled.figure`
  &.post-image {
    width: 100%;
  }
`;

export const Image = styled.img`
  &.post-image__image {
    width: 100%;
    height: auto;
  }
`;

export const Footer = styled.footer`
  &.cardfeed-footer {
    padding: 0 15px;
  }
`;

export const Interactions = styled.div`
  &.interactions {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 0 10px;
  }

  &.interactions button {
    background: transparent;
    color: var(--grey-4-semitransparent);

    span {
      font: var(--text-12);
    }
  }

  @media only screen and (min-width: 1024px) {
    &.interactions {
      gap: 0 50px;
    }

    &.interactions button {
      span {
        font: var(--text-14);
      }

      :hover {
        background: var(--grey-4-semitransparent);
        color: var(--grey-1);
      }
    }
  }
`;

export const CommentsCounter = styled.span`
  &.interactions__comments-counter {
    font: var(--text-12);
    margin-left: auto;
  }

  @media only screen and (min-width: 1024px) {
    &.interactions__comments-counter {
      font: var(--text-14);
      cursor: pointer;
    }

    &.interactions__comments-counter:hover {
      color: var(--color-lightblue);
      text-decoration: underline;
    }
  }
`;

export const ContainerComments = styled.div`
  &.comments {
    display: ${({ modalOn }) => (modalOn ? "block" : "none")};
    margin-top: 15px;
    transition: var(--transition-all-quick);
  }
`;

export const Form = styled.form`
  &.form-comments {
  }
`;

export const Label = styled.label`
  &.label-add-comment {
    position: relative;
    display: flex;
  }

  &.label-add-comment button {
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
  }

  .label-add-comment__comment:focus + button {
    top: 60%;
  }

  @media only screen and (min-width: 1024px) {
    &.label-add-comment button {
      :hover {
        background: var(--grey-1);
        color: var(--color-primary);

        svg {
          transform: rotate(-0.15turn);
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`;

export const TextArea = styled.textarea`
  &.label-add-comment__comment {
    font: var(--text-14);
    color: var(--grey-4-semitransparent);
    background: var(--color-background);
    border: none;
    border-radius: var(--radius-pixels-8);
    padding: 10px 15px;
    padding-right: 50px;
    width: 100%;
    height: 40px;
    resize: none;
    transition: all 0.2s ease-in-out;
  }

  &.label-add-comment__comment:focus {
    outline: 1.5px solid var(--color-orange);
    height: 100px;
    transition: all 0.2s ease-in-out;
  }
`;

export const Comments = styled.ul`
  &.comments-list {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    border-top: 1.5px solid var(--grey-2);
    margin-top: 15px;
    padding-top: 15px;
    height: fit-content;
    max-height: 200px;
    overflow-y: scroll;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &.comments-list::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  &.comments-list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  li {
    background-color: var(--color-background);
    border-radius: 8px;
    font-size: 12px;
    margin-bottom: 10px;
    width: max-content;
    padding: 8px 10px;
  }
`;
