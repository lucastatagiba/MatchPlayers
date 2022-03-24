import styled from "styled-components";

export const Container = styled.main`
  &.feed-page {
    margin-top: 30px;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 768px) {
    &.feed-page {
      display: flex;
      flex-flow: row nowrap;
      padding-left: 15px;
      padding-right: 15px;
      gap: 0 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    &.feed-page {
      margin-left: auto;
      margin-right: auto;
      max-width: 1100px;
      gap: 0 50px;
    }
  }
`;

export const UserInfo = styled.aside`
  &.user-container {
    display: none;
    background: var(--color-white);
    border-radius: var(--radius-pixels-4);
    padding: 15px;
    width: 200px;
    height: fit-content;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    &.user-container {
      display: block;
      flex: 1;
    }
  }
`;

export const UserCard = styled.div`
  &.usercard-container {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const PhotoContainer = styled.figure`
  &.user-photo-container {
    margin-bottom: 15px;
  }
`;

export const Photo = styled.img`
  &.user-photo-container__image {
    border-radius: var(--radius-percent-50);
    width: 100px;
    height: 100px;
  }
`;

export const Caption = styled.figcaption`
  &.user-photo-container__caption {
    font: var(--title-16);
  }
`;

export const GamesList = styled.ul`
  &.games-list-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    border-top: 1.5px solid var(--grey-2);
    padding-top: 15px;
    gap: 10px;
  }
`;

export const UserSchedule = styled.div`
  &.userschedule-container {
    text-align: center;
    border-top: 1.5px solid var(--grey-2);
    padding-top: 15px;
  }
`;

export const Avaliability = styled.h3`
  &.userschedule-container__avaliability {
    font: var(--title-16);
    margin-bottom: 5px;
  }
`;

export const Schedule = styled.strong`
  &.userschedule-container__schedule {
    font: var(--text-14-semitransparent);
  }
`;

export const Feed = styled.section`
  &.feed-container {
    flex: 4;
  }
`;

export const Navigation = styled.nav`
  &.navigation-container {
    display: flex;
    background: var(--color-white);
    margin-bottom: 25px;
    padding: 15px;
    gap: 0 10px;
    box-shadow: var(--box-shadow-smooth);
  }

  &.navigation-container button {
    font: var(--text-14);
  }

  @media only screen and (min-width: 768px) {
    &.navigation-container {
      gap: 0 20px;
    }
  }
`;

export const Select = styled.select`
  &.navigation-container__select {
    font: var(--text-14);
    background: var(--color-primary);
    color: var(--grey-1);
    margin-left: auto;
    border-radius: var(--radius-pixels-4);
    padding-left: 10px;
    cursor: pointer;
  }
`;

export const PostsContainer = styled.div`
  &.posts-container {
    background: var(--color-white);
    border-radius: var(--radius-pixels-4);
    margin-bottom: 25px;
    padding: 15px;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    border-radius: var(--radius-pixels-4);
  }
`;

export const PostsTop = styled.div`
  &.poststop-container {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    gap: 0 10px;
  }

  &.poststop-container button:hover {
    background: var(--grey-3);
    color: var(--color-background);
    transition: var(--transition-all-quick);
  }
`;

export const PhotoPub = styled.img`
  &.poststop-container__photopub {
    border-radius: var(--radius-percent-50);
    width: 50px;
    height: 50px;
  }
`;

export const PostsBottom = styled.div`
  &.postsbottom-container {
    display: flex;
    justify-content: flex-end;
    gap: 0 40px;
  }

  &.postsbottom-container button:nth-child(1) {
    font: var(--text-14);
    color: var(--color-primary);
    transition: var(--transition-all-quick);

    :hover {
      background: var(--color-primary);
      color: var(--color-orange);
      transition: var(--transition-all-quick);
    }
  }

  &.postsbottom-container button:nth-child(2) {
    font: var(--text-14);
    transition: var(--transition-all-quick);

    :hover {
      background: var(--grey-2);
      color: var(--grey-3);
      transition: var(--transition-all-quick);
    }
  }
`;

export const Friends = styled.aside`
  &.friendslist-conatiner {
    display: none;
    background: var(--color-white);
    border-radius: var(--radius-pixels-4);
    padding: 15px;
    height: fit-content;
    box-shadow: var(--box-shadow-smooth);
  }

  @media only screen and (min-width: 768px) {
    &.friendslist-conatiner {
      display: block;
      flex: 1;
    }
  }
`;

export const Title = styled.h3`
  &.friendslist-conatiner__title {
    font: var(--title-20);
    text-align: center;
    color: var(--grey-4-semitransparent);
    margin-bottom: 15px;
  }
`;

export const FriendsList = styled.ul`
  &.friendslist-conatiner__friendslist {
    text-align: center;
  }

  &.friendslist-conatiner__friendslist > li + li {
    margin-top: 15px;
    border-top: 1.5px solid var(--grey-2);
    padding-top: 15px;
  }
`;
