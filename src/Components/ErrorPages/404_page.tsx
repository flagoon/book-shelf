import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNoMatch } from './404_page.styled';

export const NoMatch = () => {
    return (
        <StyledNoMatch>
            <h1>Failed Match!</h1>
            <Link to='/'>Go back!</Link>
        </StyledNoMatch>
    );
};
