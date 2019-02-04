import React from 'react';
import { Bookcase } from '../../../Components/MainArea/Bookshelf/Bookcase/Bookcase';
import { IBook } from '../../../typings/IBooks';

interface IBookshelfContainerState {
    books: IBook[];
}

export default class BookshelfContainer extends React.Component<{}, IBookshelfContainerState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            books: this.getBooks(),
        };
    }

    public render() {
        const { books }: IBookshelfContainerState = this.state;
        return (
            <>
                {books.map(book => (
                    <Bookcase book={book} key={book.id} />
                ))}
            </>
        );
    }

    private getBooks() {
        return require('../../../mockedData/books.json');
    }
}
