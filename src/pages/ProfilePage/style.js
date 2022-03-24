import styled from "styled-components";

export const Container = styled.main`
  &.profile-page {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

export const ModalContainer = styled.div`
  &.modal-background-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${(props) => props.display};
    justify-content: center;
    align-items: center;
    background: var(--color-modal-container);
    backdrop-filter: blur(4px);
    z-index: 10;
  }
`;

export const Modal = styled.form`
  &.modal {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: var(--color-white);
    border-radius: var(--radius-pixels-4);
    padding: 30px 15px;
    max-width: 340px;
    gap: 25px 0;
    box-shadow: 0px 0px 40px -20px #000000;
  }

  &.modal button {
    font: var(--text-12);
  }

  @media only screen and (min-width: 1024px) {
    &.modal {
      max-width: 500px;
    }

    &.modal button {
      font: var(--text-14);
    }
  }
`;

export const Title = styled.h2`
  &.modal__title {
    font: var(--title-16);
    margin-right: auto;
  }
`;

export const Preview = styled.img`
  &.modal__preview {
    border-radius: var(--radius-pixels-8);
    width: 100%;
    height: auto;
  }
`;

export const ProfileCardContainer = styled.section`
  &.profile-card-container {
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 768px) {
    &.profile-card-container {
      margin: 0 auto;
      max-width: 750px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.profile-card-container {
      max-width: 1000px;
    }
  }
`;

export const ProfileCard = styled.div`
  &.profile-card {
    background: var(--color-white);
    padding-bottom: 15px;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    &.profile-card {
      border-radius: 4px 4px 0 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 330px;
  }
`;

export const ProfileCardTop = styled.div`
  &.profile-card-top {
    position: relative;
    background: no-repeat center/cover
      ${({ background }) => `url(${background})`};
    height: 180px;
  }

  @media only screen and (min-width: 768px) {
    &.profile-card-top {
      border-radius: 8px 8px 0 0;
      height: 155px;
    }
  }
`;

export const ProfileCardUserInfo = styled.div`
  &.user-info {
    position: absolute;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    top: 130px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    gap: 5px 0;
  }

  @media only screen and (min-width: 768px) {
    &.user-info {
      top: 105px;
      left: 120px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.user-info {
      left: 135px;
    }
  }
`;

export const UserPhoto = styled.img`
  &.user-info__photo {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  @media only screen and (min-width: 1024px) {
    .user-info__photo {
      width: 130px;
      height: 130px;
    }
  }
`;

export const UserNickname = styled.h2`
  &.user-info__nickname {
    font: var(--title-24);
    color: var(--grey-4-semitransparent);
  }
`;

export const Edit = styled.button`
  &.profile-card-top__edit {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
    color: var(--grey-3);
    border: none;
    border-radius: 50%;
    padding: 10px;
    transition: all 0.2s;
  }

  @media only screen and (min-width: 1024px) {
    &.profile-card-top__edit:hover {
      background: var(--grey-3);
      color: var(--color-white);
      transition: all 0.2s;
    }

    &.profile-card-top__edit:active {
      background: rgba(134, 142, 150, 0.4);
      backdrop-filter: blur(2px);
    }
  }
`;

export const ProfileCardBottom = styled.div`
  &.profile-card-bottom {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0 15px;
    padding-top: 100px;
    gap: 15px;
  }

  &.profile-card-bottom button[id="friend"] {
    display: flex;
    justify-content: center;
    align-items: center;
    font: var(--text-14);
    background: var(--color-background);
    color: var(--grey-4);
    height: 35px;
    gap: 0 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    &.profile-card-bottom {
      margin-left: auto;
      padding: 25px 0 25px 0;
      max-width: 500px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.profile-card-bottom {
      flex-flow: row nowrap;
      padding: 25px;
      max-width: 75%;
      height: 60%;
    }

    &.profile-card-bottom button[id="friend"]:hover {
      background: var(--grey-4);
      color: var(--color-background);
    }
  }
`;

export const BottomLeft = styled.div`
  &.profile-card-bottom__left {
    flex: 2;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    gap: 0 20px;
  }
`;

export const BottomRight = styled.div`
  &.bottom-right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    gap: 10px 0;
  }
`;

export const Avaliability = styled.h3`
  &.bottom-right__avaliability {
    font: var(--title-16);
    text-align: center;
  }
`;

export const Schedule = styled.strong`
  &.bottom-right__schedule {
    display: block;
    font: var(--text-14);
  }
`;

export const EditSchedule = styled.button`
  &.bottom-right__edit-schedule {
    font: var(--text-14);
    background: transparent;
    border: none;
    margin: 5px 0;
  }

  @media only screen and (min-width: 1024px) {
    &.bottom-right__edit-schedule:hover {
      text-decoration: underline;
      color: var(--color-lightblue);
    }
  }
`;

export const Selects = styled.div`
  &.selects-container {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
  }

  &.selects-container button {
    font: var(--text-14);
  }
`;

export const ProfileContentContainer = styled.section`
  &.content-container {
    margin: 0 auto;
    margin-top: 10px;
  }

  @media only screen and (min-width: 768px) {
    &.content-container {
      display: flex;
      justify-content: space-between;
      max-width: 750px;
      gap: 0 25px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.content-container {
      max-width: 1000px;
    }
  }
`;

export const Feed = styled.div`
  &.content-container__feed {
    flex: 2;
  }

  @media only screen and (min-width: 768px) {
    &.content-container__feed {
      max-width: 700px;
    }
  }
`;

export const FriendsList = styled.ul`
  &.friendslist {
    display: none;
    text-align: center;
    background: var(--color-white);
    border-radius: var(--radius-pixels-4);
    padding: 15px;
    width: 250px;
    height: max-content;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    &.friendslist {
      display: block;
    }
  }
`;

export const TitleFriends = styled.h3`
  &.friendslist-conatiner__title {
    font: var(--title-20);
    text-align: center;
    color: var(--grey-4-semitransparent);
    margin-bottom: 15px;
  }
`;
