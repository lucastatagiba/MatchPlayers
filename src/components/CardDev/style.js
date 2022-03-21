import styled from "styled-components";

export const ContainerDev = styled.div`
  body {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    background-color: #f0f0f0;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .box {
    position: relative;
    width: 208px;
    height: 208px;
    margin: 32px;
  }

  .container .box:hover .imgBox {
    transform: translate(-56px, -56px);
  }

  .container .box:hover .content {
    transform: translate(56px, 56px);
  }

  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .imgBox img {
    width: 208px;
    height: 208px;
    object-fit: cover;
    resize: both;
    border-radius: 10px;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #fff;
    z-index: 1;
    align-items: flex-end;
    text-align: center;
    transition: 0.5s ease-in-out;
    font-size: 45px;
    color: #0072b1;
    border-radius: 10px;
  }

  .content h2 {
    display: block;
    font-size: 17.5px;
    color: var(--Blue-primary);
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 1px;
  }

  .content span {
    color: #555;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;
  }

  @media (max-width: 600px) {
    .container .box:hover .content {
      transform: translate(0, 64px);
    }
    .container .box:hover .imgBox {
      transform: translate(0, 72px);
    }
  }
`;
