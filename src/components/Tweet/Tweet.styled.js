import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;
  text-transform: uppercase;

  & img {
    position: absolute;

    &.logo {
      top: 20px;
      left: 20px;
    }

    &.pictureBackground {
      top: 28px;
      left: 36px;
    }

    &.userAvatar {
      top: 178px;
      left: 150px;
      border-radius: 50%;
    }

    &.userLine {
      top: 214px;
      left: 0;
    }

    &.userStroke {
      top: 178px;
      left: 150px;
    }
  }

  & .tweets {
    margin-bottom: 16px;
  }

  & .followers {
    margin-bottom: 26px;
  }

  & button {
    margin-bottom: 36px;
    padding: 14px 56px;

    background-color: #ebd8ff;
    border: none;
    border-radius: 10px;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    font-weight: 600;
    font-size: 18px;
    line-height: 1.22em;
    text-transform: uppercase;

    transition: background-color 250ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #5cd3a8;
    }
    
    &:active {
      background-color: tomato;
    }

    &.followed {
      padding: 14px 39px;
      background-color: #5cd3a8;

      &:active {
        background-color: tomato;
      }

      /* &:hover {
        background-color: #dbcaed;
      } */
    }
  }
`;
