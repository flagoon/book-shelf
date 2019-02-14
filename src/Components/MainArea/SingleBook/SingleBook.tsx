import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { Bookcase } from '../Bookshelf/Bookcase/Bookcase';
import { NoBook } from './NoBook';

interface ILink {
    bookId: string;
}

interface IProps extends RouteComponentProps<ILink> {}

export const SingleBook = (props: IProps) => {
    const bookId = props.match.params.bookId;
    return (
        <BooksConsumer>
            {context => {
                {
                    const { books, deleteBook } = context;
                    const archivedBook = books.get(bookId);
                    if (archivedBook) {
                        return <Bookcase book={archivedBook} key={archivedBook.id} deleteBook={deleteBook} />;
                    }
                    return <NoBook>There is no book with that id!</NoBook>;
                }
            }}
        </BooksConsumer>
    );
};
