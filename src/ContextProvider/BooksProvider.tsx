import { Map } from 'immutable';
import React from 'react';
import { IBook } from '../typings/IBooks';

interface IContext extends IState {
    changeReadStatus: any;
    changeArchiveStatus: any;
    deleteBook: any;
}

interface IState {
    books: Map<string, IBook>;
}

const defaultValue: IContext = {
    books: Map<string, IBook>(),
    changeReadStatus: {},
    changeArchiveStatus: {},
    deleteBook: {},
};

const { Provider, Consumer } = React.createContext(defaultValue);

class BooksProvider extends React.Component<{}, IState> {

    public static getBooks(): IBook[] {
        return require('../mockedData/books.json');
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            books: Map<string, IBook>(),
        };
        this.changeReadStatus = this.changeReadStatus.bind(this);
        this.changeArchiveStatus = this.changeArchiveStatus.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    public componentDidMount() {
        this.setState({
            books: this.prepareMapForState(BooksProvider.getBooks()),
        });
    }

    public changeArchiveStatus(id: string) {
        const selectedBook = this.state.books.get(id);
        if(selectedBook) {
            selectedBook.isArchived = !selectedBook.isArchived;
            const newBooks = this.state.books.set(id, selectedBook);
            this.setState({books: newBooks})
        }
    }

    public changeReadStatus(id: string) {
        const selectedBook = this.state.books.get(id);
        if(selectedBook) {
            selectedBook.isRead = !selectedBook.isRead;
            const newBooks = this.state.books.set(id, selectedBook);
            this.setState({books: newBooks})
        }
    }

    public deleteBook(id: string) {
        const reducedBooks = this.state.books.delete(id);
        this.setState({books: reducedBooks})
    }

    public render() {
        return <Provider value={
            {
                books: this.state.books,
                changeReadStatus: this.changeReadStatus,
                changeArchiveStatus: this.changeArchiveStatus,
                deleteBook: this.deleteBook,
            }
        }>
            {this.props.children}
        </Provider>;
    }

    public prepareMapForState = (books: IBook[]): Map<string, IBook> => {
        let preparedMappedBooks: Map<string, IBook> = Map();
        books.forEach(book => {
            preparedMappedBooks = preparedMappedBooks.set(book.id, book);
        });
        return preparedMappedBooks;
    };
}

export { BooksProvider, Consumer as BooksConsumer };
