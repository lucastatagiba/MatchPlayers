import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid var(--Gray-2);
  .logoimg {
    height: 40px;
    width: 40px;
  }
  .bigLogo {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      width: 100%;
    }
    svg {
      color: var(--Gray-3);
      width: 25px;
      height: 25px;
    }
    .userimg,
    .houseIcon,
    .messageIcon,
    .configIcon {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .bigLogo {
      height: 50px;
      width: fit-content;
      display: inline;
    }
    .logoimg {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      .menu {
        display: none;
      }

      .houseIcon,
      .messageIcon,
      .configIcon {
        display: inline;
        color: var(--Gray-3);
        width: 40px;
        height: 40px;
      }
      .userimg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline;
      }
    }
  }
`;
