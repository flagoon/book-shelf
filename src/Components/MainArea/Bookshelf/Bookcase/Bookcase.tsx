import React from 'react';
import { Link } from 'react-router-dom';
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
    changeReadStatus?: any;
    changeArchiveStatus?: any;
    deleteBook?: any;
}

export const Bookcase = (props: IBookcaseProps) => {
    const { book, changeReadStatus, changeArchiveStatus, deleteBook } = props;
    const handleBookDelete = (): void => {
        deleteBook(book.id);
    };
    const handleBookArchive = (): void => {
        changeArchiveStatus(book.id);
    };
    const handleBookRead = (): void => {
        changeReadStatus(book.id);
    };

    return (
        <BookcaseHolder>
            <DataWrapper>
                <img src={book.picture} alt='Cover image' />
                <TextDataWrapper>
                    <Title>
                        <Link to={`/book/${book.id}`}>{book.title}</Link>
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
                                <StyledButton color='blue' onClick={handleBookRead}>
                                    <EmojiGenerator value='📖' label='Mark the page' />
                                    Mark the page
                                </StyledButton>
                                <StyledButton color='red' onClick={handleBookArchive}>
                                    <EmojiGenerator value='💾' label='Archive the book' />
                                    Archive the book
                                </StyledButton>
                                <StyledButton color='green' onClick={handleBookRead}>
                                    <EmojiGenerator value='🔖' label='Mark as read' />
                                    Mark as read
                                </StyledButton>
                            </>
                        )}
                        {book.isArchived && (
                            <>
                                <StyledButton color='red' onClick={handleBookDelete}>
                                    <EmojiGenerator value='🗑' label='Delete the book' />
                                    Delete the book
                                </StyledButton>
                                <StyledButton color='limeGreen' onClick={handleBookArchive}>
                                    <EmojiGenerator value='💾' label='Archive the book' />
                                    Read again
                                </StyledButton>
                            </>
                        )}
                    </ControlButtons>
                </TextDataWrapper>
            </DataWrapper>
        </BookcaseHolder>
    );
};
