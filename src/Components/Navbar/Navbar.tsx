import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink, StyledHeader } from './Navbar.styled';

const Navbar = () => (
    <StyledHeader>
        <Link to="/bookshelf" style={{ textDecoration: 'none' }}>
            <HeaderLink>Bookshelf</HeaderLink>
        </Link>
        <Link to="/archive" style={{ textDecoration: 'none' }}>
            <HeaderLink>Archive</HeaderLink>
        </Link>
    </StyledHeader>
);

export default Navbar;
