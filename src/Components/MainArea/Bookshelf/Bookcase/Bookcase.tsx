import React from 'react';
import { IBook } from '../../../../typings/IBooks';
import { StyledButton } from '../../../Common/Button/Button';
import EmojiGenerator from '../../../Common/EmojiGenerator/EmojiGenerator';
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
                <img src={book.picture} alt='Cover image' />
                <TextDataWrapper>
                    <Title>
                        {book.title}
                        {book.isRead && <EmojiGenerator value='✔️' label='This book is read.' />}
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
                        {book.isArchived || (
                            <>
                                {/* tslint:disable-next-line */}
                                <StyledButton color='blue' onClick={() => console.log('clicked')}>
                                    <EmojiGenerator value='📖' label='Mark the page' />
                                    Mark the page
                                </StyledButton>
                                {/* tslint:disable-next-line */}
                                <StyledButton color='red' onClick={() => console.log('clicked')}>
                                    <EmojiGenerator value='💾' label='Archive the book' />
                                    Archive the book
                                </StyledButton>
                                {/* tslint:disable-next-line */}
                                <StyledButton color='green' onClick={() => console.log('clicked')}>
                                    <EmojiGenerator value='🔖' label='Mark as read' />
                                    Mark as read
                                </StyledButton>
                            </>
                        )}
                        {book.isArchived && (
                            <>
                                {/* tslint:disable-next-line */}
                                <StyledButton color='red' onClick={() => console.log('clicked')}>
                                    <EmojiGenerator value='🗑' label='Delete the book' />
                                    Delete the book
                                </StyledButton>
                            </>
                        )}
                    </ControlButtons>
                </TextDataWrapper>
            </DataWrapper>
        </BookcaseHolder>
    );
};
