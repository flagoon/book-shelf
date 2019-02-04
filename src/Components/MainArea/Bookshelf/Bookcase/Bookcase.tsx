import React from 'react';
import { IBook } from '../../../../typings/IBooks';
import { StyledButton } from '../../../Button/Button';
import {
    Author,
    BookcaseHolder,
    BookDescription,
    ControlButtons,
    DataWrapper,
    TechnicalBookData,
    TextDataWrapper,
    Title,
} from './Bookcase.styled';

interface IBookcaseProps {
    book: IBook;
}

export const Bookcase = (props: IBookcaseProps) => {
    const { book } = props;
    return (
        <BookcaseHolder>
            <DataWrapper>
                <img src={book.picture} />
                <TextDataWrapper>
                    <Title>{book.title}</Title>
                    <Author>Author: {book.author}</Author>
                    <TechnicalBookData>
                        <li>
                            <span>ISBN:</span> {book.isbn},
                        </li>
                        <li>
                            <span>cover:</span> {book.cover},
                        </li>
                        <li>
                            <span>acquired:</span> {book.date},
                        </li>
                        <li>
                            <span>pages:</span> {book.pages}
                        </li>
                    </TechnicalBookData>
                    <BookDescription>{book.description}</BookDescription>
                    <ControlButtons>
                        <StyledButton success value='Mark as read' className='styledButton' />
                        <StyledButton primary value='Archive the book' className='styledButton' />
                        <StyledButton alert value='Delete the book' className='styledButton' />
                    </ControlButtons>
                </TextDataWrapper>
            </DataWrapper>
        </BookcaseHolder>
    );
};
