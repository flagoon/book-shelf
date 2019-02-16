import { Map } from 'immutable';
import React, { FormEvent } from 'react';
import { IBook } from '../typings/IBooks';

export interface IBookContext extends IBooksProviderState {
    changeReadStatus: (id: string) => void;
    changeArchiveStatus: (id: string) => void;
    deleteBook: (id: string) => void;
    onMarkPageSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onMarkPageChange: (event: FormEvent<HTMLInputElement>, id: string) => void;
}

interface IBooksProviderState {
    books: Map<string, IBook>;
    tempMarkedPage: number;
    tempBookId: string;
}

const defaultValue = {
    changeReadStatus: () => undefined,
    changeArchiveStatus: () => undefined,
    deleteBook: () => undefined,
    onMarkPageSubmit: () => undefined,
    onMarkPageChange: () => undefined,
    books: Map({
        '1': {
            id: '1',
            author: 'author',
            index: 1,
            picture: '',
            pages: 0,
            cover: 'hard',
            isbn: '',
            date: '',
            title: '',
            description: '',
            isRead: true,
            isArchived: true,
            markedPage: 0,
        },
    }),
    tempMarkedPage: 0,
    tempBookId: '',
};
const { Provider, Consumer } = React.createContext<IBookContext>(defaultValue);

class BooksProvider extends React.Component<{}, IBooksProviderState> {
    public static getBooks(): IBook[] {
        return require('../mockedData/books.json');
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            books: defaultValue.books,
            tempMarkedPage: defaultValue.tempMarkedPage,
            tempBookId: defaultValue.tempBookId,
        };
        this.changeReadStatus = this.changeReadStatus.bind(this);
        this.changeArchiveStatus = this.changeArchiveStatus.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.onMarkPageSubmit = this.onMarkPageSubmit.bind(this);
        this.onMarkPageChange = this.onMarkPageChange.bind(this);
    }

    public componentDidMount() {
        this.setState({
            books: this.prepareMapForState(BooksProvider.getBooks()),
        });
    }

    public changeArchiveStatus(id: string) {
        const selectedBook = this.state.books.get(id);
        if (selectedBook) {
            selectedBook.isArchived = !selectedBook.isArchived;
            const newBooks = this.state.books.set(id, selectedBook);
            this.setState({ books: newBooks });
        }
    }

    public changeReadStatus(id: string) {
        const selectedBook = this.state.books.get(id);
        if (selectedBook) {
            selectedBook.isRead = !selectedBook.isRead;
            const newBooks = this.state.books.set(id, selectedBook);
            this.setState({ books: newBooks });
        }
    }

    public deleteBook(id: string) {
        const reducedBooks = this.state.books.delete(id);
        this.setState({ books: reducedBooks });
    }

    public onMarkPageSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(this.state.tempBookId) {
            const book = this.state.books.get(this.state.tempBookId);
            const newBook: IBook = { ...(book as IBook), markedPage: this.state.tempMarkedPage };
            const newBooks = this.state.books.set(this.state.tempBookId, newBook);
            this.setState({ books: newBooks });
        }
    }

    public onMarkPageChange(e: FormEvent<HTMLInputElement>, id: string) {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        this.setState({ ...this.state, tempBookId: id, tempMarkedPage: parseInt(target.value, 10) });
    }

    public render() {
        return (
            <Provider
                value={{
                    books: this.state.books,
                    tempMarkedPage: this.state.tempMarkedPage,
                    tempBookId: this.state.tempBookId,
                    changeReadStatus: this.changeReadStatus,
                    changeArchiveStatus: this.changeArchiveStatus,
                    deleteBook: this.deleteBook,
                    onMarkPageSubmit: this.onMarkPageSubmit,
                    onMarkPageChange: this.onMarkPageChange,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }

    public prepareMapForState = (books: IBook[]): Map<string, IBook> => {
        let preparedMappedBooks: Map<string, IBook> = Map();
        books.forEach((book) => {
            preparedMappedBooks = preparedMappedBooks.set(book.id, book);
        });
        return preparedMappedBooks;
    };
}

export { BooksProvider, Consumer as BooksConsumer };
