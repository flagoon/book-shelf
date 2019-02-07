import React from 'react';
import { ArchivedBook } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook';
import { Author, FirstRow, ISBN, Title } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook.styled';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const Archive = () => (
    <BooksConsumer>
        {context => {
            {
                const { archivedBooks } = context;
                if (archivedBooks) {
                    return (
                        <>
                            <FirstRow>
                                <Title>Title</Title>
                                <Author>Author</Author>
                                <ISBN>ISBN</ISBN>
                            </FirstRow>
                            {archivedBooks!.valueSeq().map(book => (
                                <ArchivedBook book={book} key={book.id} />
                            ))}
                        </>
                    );
                }
                return <div>Nothing to load</div>;
            }
        }}
    </BooksConsumer>
);

export default Archive;
