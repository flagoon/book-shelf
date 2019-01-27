import React from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem/MenuListItem";

const LeftMenu = () => (
    <StyledLeftMenu>
      <MenuListItem className="menuItem">Bookshelf</MenuListItem>
      <MenuListItem className="menuItem">Archive</MenuListItem>
      <MenuListItem className="menuItem">AddBook</MenuListItem>
    </StyledLeftMenu>
);

const StyledLeftMenu = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100vh;
  width: 300px;
  margin: 0;
  padding: 0.3rem;
`;

export default LeftMenu;
