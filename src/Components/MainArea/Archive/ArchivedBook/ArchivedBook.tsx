import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IBook } from '../../../../typings/IBooks';
import { Author, BookRow, ISBN, Title } from './ArchivedBook.styled';

interface IArchivedBook {
    book: IBook;
}

export const ArchivedBook = (props: IArchivedBook) => {
    const { book } = props;
    return (
        <StyledNavLink to={`/archive/${book.id}`}>
            <BookRow>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <ISBN>{book.isbn}</ISBN>
            </BookRow>
        </StyledNavLink>
    );
};

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin-bottom: 1px;

    &:hover {
        color: blue;
        text-decoration: underline;
    }
`;
