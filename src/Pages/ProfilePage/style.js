import styled from "styled-components";

export const Container = styled.main`
  padding-top: 30px;
  padding-bottom: 50px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  background: rgba(134, 142, 150, 0.25);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

export const ModalContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: var(--White-primary);
  border-radius: 8px;
  padding: 10px;
  max-width: 340px;
  gap: 25px 0;
  box-shadow: 0px 0px 40px -20px #000000;
`;

export const Title = styled.h2`
  font-size: 14px;
  margin-right: auto;
`;

export const Preview = styled.img`
  border-radius: 4px;
  width: 100%;
  height: auto;
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

export const Edit = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--White-primary);
  color: var(--Gray-3);
  border: none;
  border-radius: 50%;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    background: var(--Gray-3);
    color: var(--White-primary);
    transition: all 0.2s;
  }

  &:active {
    background: rgba(134, 142, 150, 0.25);
    backdrop-filter: blur(2px);
  }

  /* svg {
    pointer-events: none;
  } */
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

  @media only screen and (min-width: 1024px) {
    top: 90px;
  }
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media only screen and (min-width: 1024px) {
    width: 130px;
    height: 130px;
  }
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
  padding-top: 100px;
  gap: 15px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Background-Color);
    color: var(--Gray-4);
    height: 35px;
    gap: 0 5px;
    margin-bottom: 15px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: auto;
    padding: 25px 0 25px 0;
    max-width: 500px;
    button {
      margin-bottom: 0px;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-flow: row;
    padding: 25px;
    margin-left: auto;
    max-width: 75%;
  }
`;

export const BottomLeft = styled.div`
  flex: 2;
  display: flex;
  flex-flow: row wrap;
  gap: 15px 26px;
  margin-top: 20px;
`;

export const BottomRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  span:nth-of-type(2) {
    background-color: var(--Gray-2);
    border-radius: 8px;
    width: fit-content;
    text-align: center;
    margin: 5px auto;
  }
  div > button:first-of-type {
    background-color: var(--Blue-primary);
    color: white;
    height: 25px;
    font-size: 14px;
    margin-top: 5px;
  }
  button:hover {
    text-decoration: underline;
  }
`;

export const Avaliable = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-align: center;

  button {
    border: none;
    background: none;
    margin: 0px auto;
    color: var(--Gray-3);
  }

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

export const FeedEmpty = styled.div`
  margin: 0 auto;
  display: flex;
  width: 98%;
  background-color: var(--White-primary);
  border-radius: 8px;
  height: 500px;
  justify-content: center;
  align-items: center;
  color: var(--Gray-3);
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

export const Selects = styled.div`
  display: flex;
  flex-direction: row;
`;
