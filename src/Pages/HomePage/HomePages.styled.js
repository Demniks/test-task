// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

const bounceAnimation = keyframes`${bounceInUp}`;


export const TitleList = styled.h2`
  animation: 1s ${bounceAnimation};
  font-size: 60px;
  color: green;
  margin-top: 48px;
  margin-left: 48px;
`;
