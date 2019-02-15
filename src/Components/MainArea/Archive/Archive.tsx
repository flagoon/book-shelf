import React from 'react';
import { ArchivedBook } from './ArchivedBook/ArchivedBook';
import { Author, FirstRow, ISBN, Title } from './ArchivedBook/ArchivedBook.styled';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import {MainBoxArchive} from "./Archive.styled";

const Archive = () => (
    <BooksConsumer>
        {context => {
            {
                const { books } = context;
                return (
                    <MainBoxArchive>
                        <FirstRow>
                            <Title>Title</Title>
                            <Author>Author</Author>
                            <ISBN>ISBN</ISBN>
                        </FirstRow>
                        {books
                            .valueSeq()
                            .filter(book => book.isArchived === true)
                            .map(book => (
                                <ArchivedBook book={book} key={book.id} />
                            ))}
                    </MainBoxArchive>
                );
            }
        }}
    </BooksConsumer>
);

export default Archive;
