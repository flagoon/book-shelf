import React from 'react';
import Bookshelf from '../../../Components/MainArea/Bookshelf/Bookshelf';
import { IBooks } from '../../../typings/IBooks';

interface IState {
    books: IBooks[];
}

export default class BookshelfContainer extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            books: this.getBooks(),
        };
    }

    public render() {
        return <Bookshelf books={this.state.books} />;
    }

    private getBooks() {
        return require('../../../mockedData/books.json');
    }
}
