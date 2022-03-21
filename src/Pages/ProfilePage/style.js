import styled from "styled-components";

export const Container = styled.main`
  padding-top: 30px;
  padding-bottom: 50px;
`;

export const ProfileCardContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
`;

export const ProfileCard = styled.div`
  background: var(--White-primary);

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    border-radius: 8px 8px 0 0;
    max-width: 750px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
    height: 330px;
  }
`;

export const ProfileCardTop = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 155px;

  @media only screen and (min-width: 768px) {
    border-radius: 8px 8px 0 0;
  }
`;

export const ProfileCardUserInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  top: 100px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  gap: 5px 0;

  @media only screen and (min-width: 768px) {
    left: 0%;
    width: 250px;
    transform: translateX(0%);
  }
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const UserNickname = styled.h2`
  font-size: 24px;
`;

export const UserInfo = styled.h3`
  display: none;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const UserEmail = styled.h3`
  font-size: 18px;
`;

export const ProfileCardBottom = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 30px;
  padding-top: 100px;
  padding-bottom: 15px;
  gap: 15px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Background-Color);
    color: var(--Gray-4);
    height: 35px;
    gap: 0 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: auto;
    padding: 25px 0 25px 0;
    max-width: 500px;
  }

  @media only screen and (min-width: 1024px) {
    flex-flow: row;
    padding: 25px;
    max-width: 75%;
  }
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px 26px;
`;

export const BottomRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Avaliable = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-align: center;

  & > span + span {
    margin-top: 15px;
  }
`;

export const Text = styled.span`
  display: block;
`;

export const ProfileContentContainer = styled.section`
  margin: 0 auto;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 750px;
    gap: 0 25px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const Feed = styled.div`
  flex: 2;

  ul {
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    ul {
      width: 100;
    }
  }
`;

export const FriendsList = styled.ul`
  display: none;
  background: var(--White-primary);
  width: 300px;
  list-style: none;
  border-radius: 8px;
  padding-bottom: 20px;
  height: max-content;

  h3 {
    font-size: 22px;
    text-align: center;
    border-bottom: 1px solid var(--Gray-3);
    padding: 10px 0;
  }
  li {
    display: flex;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid var(--Gray-3);
    padding: 10px;
    align-items: center;

    h2 {
      font-size: 18px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
