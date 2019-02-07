import React from 'react';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';

const AddBookForm = () => {
    return (
        <BooksConsumer>
            {context => {
                return <div>{JSON.stringify(context)}</div>;
            }}
        </BooksConsumer>
    );
};

export default AddBookForm;
