import { Map } from 'immutable';
import React from 'react';
import { C } from '../Constants';
import { IBook } from '../typings/IBooks';

interface IContext {
    books: Map<string, IBook>;
    archivedBooks: Map<string, IBook>;
}

const defaultValue: IContext = {
    books: Map<string, IBook>(),
    archivedBooks: Map<string, IBook>(),
};

const { Provider, Consumer } = React.createContext(defaultValue);

class BooksProvider extends React.Component<{}, IContext> {
    public state = {
        books: Map<string, IBook>(),
        archivedBooks: Map<string, IBook>(),
    };

    public componentDidMount() {
        this.setState({
            books: this.prepareMapForState(this.getBooks(C.BOOKS_SOURCE)),
            archivedBooks: this.prepareMapForState(this.getBooks(C.ARCHIVED_BOOKS_SOURCE)),
        });
    }

    public render() {
        return (
            <Provider value={{ books: this.state.books, archivedBooks: this.state.archivedBooks }}>
                {this.props.children}
            </Provider>
        );
    }

    private getBooks = (source: string): IBook[] => {
        const fetchedBooks = require('../mockedData/books.json');
        if (source === C.BOOKS_SOURCE) {
            return fetchedBooks.filter((book: IBook) => book.isArchived === false);
        } else {
            return fetchedBooks.filter((book: IBook) => book.isArchived === true);
        }
    };

    private prepareMapForState = (books: IBook[]): Map<string, IBook> => {
        let preparedMappedBooks: Map<string, IBook> = Map();
        books.forEach(book => {
            preparedMappedBooks = preparedMappedBooks.set(book.id, book);
        });
        return preparedMappedBooks;
    };
}

export { BooksProvider, Consumer as BooksConsumer };
