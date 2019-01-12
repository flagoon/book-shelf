import * as React from 'react';
import styled from 'styled-components';
import MenuListItem from '../../containers/MenuListItem';

const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <MenuListItem linkAddress={'bookShelf'}>Bookshelf</MenuListItem>
            <MenuListItem linkAddress={'archive'}>Archive</MenuListItem>
            <MenuListItem linkAddress={'addBookForm'}>AddBook</MenuListItem>
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 300px;
    margin: 0;
    padding: 0.3rem;
`;

export default LeftMenu;
