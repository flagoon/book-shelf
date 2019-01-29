import React from 'react';
import { IBooks } from '../../../typings/IBooks';
import { Bookcase } from './Bookcase/Bookcase';

interface IProps {
    books: IBooks[];
}

const Bookshelf = ({ books }: IProps) => {
    return (
        <div>
            {books.map((book: IBooks) => (
                <Bookcase book={book} />
            ))}
        </div>
    );
};

export default Bookshelf;
