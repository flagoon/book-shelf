import React from 'react';
import styled from 'styled-components';
import { IBooks } from '../../../../typings/IBooks';

interface IProps {
    book: IBooks;
}

export const Bookcase = ({ book }: IProps) => {
    return (
        <div>
            <ul>
                <li>{book.title}</li>
                <li>{book.author}</li>
                <li>{book.isbn}</li>
                <li>{book.cover}</li>
                <li>{book.date}</li>
                <li>{book.pages}</li>
                <li>{book.description}</li>
                <img src={book.picture} />
            </ul>
        </div>
    );
};
