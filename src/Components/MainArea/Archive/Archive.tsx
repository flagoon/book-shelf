import React from 'react';
import { ArchivedBook } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook';
import { Author, FirstRow, ISBN, Title } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook.styled';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const Archive = () => (
    <BooksConsumer>
        {context => {
            {
                const { books } = context;
                return (
                    <>
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
                    </>
                );
            }
        }}
    </BooksConsumer>
);

export default Archive;
