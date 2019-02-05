import React from 'react';
import { RouteComponentProps } from 'react-router';
import { SingleBook } from '../../../Components/MainArea/SingleBook/SingleBook';
import { IBook } from '../../../typings/IBooks';

interface IBookContainerState {
    book: Partial<IBook>;
}

interface IBookContainerProps {
    bookId: string;
}

export class BookContainer extends React.Component<RouteComponentProps<IBookContainerProps>, IBookContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            book: {},
        };
    }

    public componentDidMount() {
        const { bookId } = this.props.match.params;
        console.log(bookId); // tslint:disable-line no-console
    }

    public render() {
        return <SingleBook />;
    }
}
