import { Map } from 'immutable';
import React from 'react';
import { IBook } from '../typings/IBooks';

interface IContext {
    books: Map<string, IBook>;
}

const defaultValue: IContext = {
    books: Map<string, IBook>(),
};

const { Provider, Consumer } = React.createContext(defaultValue);

class BooksProvider extends React.Component<{}, IContext> {
    public state = {
        books: Map<string, IBook>(),
    };

    public componentDidMount() {
        this.setState({
            books: this.prepareMapForState(this.getBooks()),
        });
    }

    public render() {
        return <Provider value={{ books: this.state.books }}>{this.props.children}</Provider>;
    }

    public getBooks = (): IBook[] => {
        return require('../mockedData/books.json');
    };

    public prepareMapForState = (books: IBook[]): Map<string, IBook> => {
        let preparedMappedBooks: Map<string, IBook> = Map();
        books.forEach(book => {
            preparedMappedBooks = preparedMappedBooks.set(book.id, book);
        });
        return preparedMappedBooks;
    };
}

export { BooksProvider, Consumer as BooksConsumer };
