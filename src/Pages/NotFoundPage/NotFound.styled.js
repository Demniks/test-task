import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 20px;
  &:focus,
  &:hover {
    color: tomato;
    font-style: italic;
  }
`;
