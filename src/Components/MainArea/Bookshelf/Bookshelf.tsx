import React from 'react';
import {BooksConsumer} from '../../../ContextProvider/BooksProvider';
import {Bookcase} from './Bookcase/Bookcase';

const Bookshelf = () => (
    <BooksConsumer>
        {context => {
            {
                const {books} = context;
                return (
                    <>
                        {books.valueSeq().map(book => (
                            <Bookcase book={book} key={book.id}/>
                        ))}
                    </>
                );
            }
        }}
    </BooksConsumer>
);

export default Bookshelf;
