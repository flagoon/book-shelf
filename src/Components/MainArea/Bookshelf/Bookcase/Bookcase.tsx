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
import { IsRead } from './IsRead';

interface IBookcaseProps {
    book: IBook;
}

export const Bookcase = (props: IBookcaseProps) => {
    const { book } = props;
    return (
        <BookcaseHolder>
            <DataWrapper>
                <img src={book.picture} alt='Cover image' />
                <TextDataWrapper>
                    <Title>
                        {book.title}
                        {book.isRead && <IsRead />}
                    </Title>
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
                        <StyledButton success value='🔖 Mark as read' />
                        <StyledButton primary value='💾 Archive the book' />
                        <StyledButton alert value='🗑 Delete the book' />
                    </ControlButtons>
                </TextDataWrapper>
            </DataWrapper>
        </BookcaseHolder>
    );
};
