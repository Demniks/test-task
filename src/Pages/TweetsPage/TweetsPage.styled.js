import styled from "styled-components";

export const GoBack = styled.button`
  margin: 16px auto 16px 32px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  color: tomato;
  background-color: #b0baf5;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus {
    background-color: #031992;
    font-style: italic;
  }
`;
