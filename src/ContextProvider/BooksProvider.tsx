import { Map } from 'immutable';
import React from 'react';
import { C } from '../Constants';
import { IBook } from '../typings/IBooks';

interface IState {
    books: Map<string, IBook>;
    archivedBooks: Map<string, IBook>;
}

const defaultValue: IState = {
    books: Map<string, IBook>(),
    archivedBooks: Map<string, IBook>(),
};

const { Provider, Consumer } = React.createContext(defaultValue);

class BooksProvider extends React.Component<{}, IState> {
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
        if (source === C.BOOKS_SOURCE) {
            return require('../mockedData/books.json');
        }
        return require('../mockedData/books.json');
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
