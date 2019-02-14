import { Map } from 'immutable';

import { IBook } from '../typings/IBooks';
import { BooksProvider } from './BooksProvider';

describe('BooksProvider', () => {
    const mockBooks: Array<{ id: string; title: string }> = [
        {
            id: '1',
            title: 'mockName',
        },
        {
            id: '2',
            title: 'mockName2',
        },
        {
            id: '3',
            title: 'mockName3',
        },
    ];

    beforeAll(() => {
        jest.mock('../mockedData/books.json', () => mockBooks, { virtual: true });
    });

    describe('getBooks function', () => {
        it('should return list of books', () => {
            const newBooks = BooksProvider.getBooks();
            expect(newBooks).toEqual(mockBooks);
        });
    });

    describe('prepareMapForState', () => {
        it('should change array of books into Map of books', () => {
            const booksProvider = new BooksProvider({});
            const test = booksProvider.prepareMapForState((mockBooks as unknown) as IBook[]);
            expect(test).toEqual(
                Map({
                    '1': { id: '1', title: 'mockName' },
                    '2': { id: '2', title: 'mockName2' },
                    '3': { id: '3', title: 'mockName3' },
                }),
            );
        });
    });
});
