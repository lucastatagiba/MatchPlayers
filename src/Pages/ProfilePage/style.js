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
  position: relative;
  background: var(--White-primary);
  border-radius: 0 0 8px 8px;
  height: 370px;
`;

export const ProfileCardUserInfo = styled.div`
  position: absolute;
  top: 90px;
  text-align: center;
  width: 250px;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
`;

export const UserNickname = styled.h2`
  font-size: 24px;
`;

export const UserName = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const UserEmail = styled.h3`
  font-size: 18px;
  margin-top: 2.5px;
`;

export const ProfileCardTop = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px 8px 0 0;
  min-height: 155px;
`;

export const ProfileCardBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: auto;
  max-width: 75%;
  height: 58%;

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
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 2;
  padding-bottom: 50px;
  gap: 30px 25px;
`;

export const BottomRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 25px 20px 0;
  flex: 1;
  button:first-of-type {
    border: none;
    background: none;
    margin: 0px auto;
    color: var(--Gray-3);
  }
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
  margin-bottom: 30px;

  & > span + span {
    margin-top: 15px;
  }
`;

export const Text = styled.span`
  display: block;
`;

export const ProfileContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1000px;
`;

export const Feed = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px 0;
`;

export const PlaceHolder = styled.ul`
  background: var(--White-primary);
  width: 300px;
  list-style: none;
  border-radius: 8px;
  padding-bottom: 20px;
  height: max-content;
  min-width: 210px;
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
`;

export const Selects = styled.div`
  display: flex;
  flex-direction: row;
`;
