import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BooksConsumer } from '../../../ContextProvider/BooksProvider';
import { Bookcase } from '../Bookshelf/Bookcase/Bookcase';

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
                    const { books } = context;
                    if (books) {
                        const book = books.get(bookId);
                        return <Bookcase book={book!} key={book!.id} />;
                    }
                    return <div>load</div>;
                }
            }}
        </BooksConsumer>
    );
};
