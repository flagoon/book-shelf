import React from 'react';
import { ArchivedBook } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook';
import { Author, FirstRow, ISBN, Title } from '../../../Components/MainArea/Archive/ArchivedBook/ArchivedBook.styled';
import { IBook } from '../../../typings/IBooks';

interface IArchiveContainerState {
    archivedBooks: IBook[];
}

export default class ArchiveContainer extends React.Component<{}, IArchiveContainerState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            archivedBooks: [],
        };
    }

    public componentDidMount() {
        const archivedBooks = this.getArchivedBooks();
        this.setState({
            archivedBooks,
        });
    }

    public render() {
        const { archivedBooks } = this.state;
        return (
            <>
                <FirstRow>
                    <Title>Title</Title>
                    <Author>Author</Author>
                    <ISBN>ISBN</ISBN>
                    <div>isRead</div>
                </FirstRow>
                {archivedBooks.map(archivedBook => {
                    return <ArchivedBook book={archivedBook} key={archivedBook.id} />;
                })}
            </>
        );
    }

    private getArchivedBooks = () => {
        return require('../../../mockedData/books');
    };
}
