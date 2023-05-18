import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 420px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
