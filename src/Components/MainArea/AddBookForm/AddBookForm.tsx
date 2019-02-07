import React from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const AddBookForm = () => {
    return (
        <BooksConsumer>
            {context => {
                return <div>{context.one}</div>;
            }}
        </BooksConsumer>
    );
};

export default AddBookForm;
