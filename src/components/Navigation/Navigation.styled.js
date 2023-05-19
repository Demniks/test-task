import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  display: inline-block;
  margin-left: 32px;
  color: #212121;
  &.active {
    color: tomato;
  }
`;

export const NavigWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.4);
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;
