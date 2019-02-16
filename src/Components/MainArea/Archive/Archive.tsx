import React from 'react';
import {BooksConsumer, IBookContext} from '../../../ContextProvider/BooksProvider';
import {MainBoxArchive} from "./Archive.styled";
import { ArchivedBook } from './ArchivedBook/ArchivedBook';
import { Author, FirstRow, ISBN, Title } from './ArchivedBook/ArchivedBook.styled';

const Archive = () => (
    <BooksConsumer>
        {(context) => {
            {
                const { books } = context as IBookContext;
                return (
                    <MainBoxArchive>
                        <FirstRow>
                            <Title>Title</Title>
                            <Author>Author</Author>
                            <ISBN>ISBN</ISBN>
                        </FirstRow>
                        {books
                            .valueSeq()
                            .filter((book) => book.isArchived)
                            .map((book) => (
                                <ArchivedBook book={book} key={book.id} />
                            ))}
                    </MainBoxArchive>
                );
            }
        }}
    </BooksConsumer>
);

export default Archive;
