import React from 'react';
import { IBook } from '../../../../typings/IBooks';
import { Author, BookRow, ISBN, Title } from './ArchivedBook.styled';

interface IArchivedBook {
    book: IBook;
}

export const ArchivedBook = (props: IArchivedBook) => {
    const { book } = props;
    return (
        <BookRow>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
            <ISBN>{book.isbn}</ISBN>
            <div>'isRead'</div>
        </BookRow>
    );
};
