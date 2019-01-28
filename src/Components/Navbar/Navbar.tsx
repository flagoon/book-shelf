import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <StyledHeader>
        <Link to='/bookshelf' style={{ textDecoration: 'none' }}>
            <HeaderLink>Bookshelf</HeaderLink>
        </Link>
        <Link to='/archive' style={{ textDecoration: 'none' }}>
            <HeaderLink>Archive</HeaderLink>
        </Link>
        <Link to='/addbook' style={{ textDecoration: 'none' }}>
            <HeaderLink>Add book</HeaderLink>
        </Link>
    </StyledHeader>
);

export default Navbar;

const StyledHeader = styled.ul`
    display: flex;
    width: 100vw;
    border-bottom: 2px solid darkolivegreen;
    background-color: #0f0;
    margin: 0;
    padding: 0;
`;

const HeaderLink = styled.li`
    list-style-position: outside;
    list-style-type: none;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    user-select: none;

    &:hover {
        text-decoration: underline;
    }
`;
