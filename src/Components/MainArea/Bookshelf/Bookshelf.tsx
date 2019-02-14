import React from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { Bookcase } from './Bookcase/Bookcase';

const Bookshelf = () => (
    <BooksConsumer>
        {context => {
            {
                const { books, changeReadStatus, changeArchiveStatus, deleteBook } = context;
                return (
                    <>
                        {books
                            .valueSeq()
                            .filter(book => !book.isArchived)
                            .map(book => (
                                <Bookcase
                                    book={book}
                                    key={book.id}
                                    changeReadStatus={changeReadStatus}
                                    changeArchiveStatus={changeArchiveStatus}
                                    deleteBook={deleteBook}
                                />
                            ))}
                    </>
                );
            }
        }}
    </BooksConsumer>
);

export default Bookshelf;
