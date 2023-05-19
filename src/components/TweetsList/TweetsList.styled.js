import styled from "styled-components";

export const StyledUl = styled.ul`
  margin-top: 36px;
  margin-bottom: 36px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px;
`;

export const StyledBtn = styled.button`
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
`;
