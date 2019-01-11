import * as React from 'react';
import { connect } from 'react-redux';
import AddBookForm from './AddBookForm/AddBookForm';
import Archive from './Archive/Archive';
import Bookshelf from './Bookshelf/Bookshelf';

interface IProps {
    activePage: string;
}

interface IVisibleComponent {
    bookShelf: JSX.Element;
    addBookForm: JSX.Element;
    archive: JSX.Element;
    [key: string]: JSX.Element;
}

const MainArea = ({ activePage }: IProps) => {
    const visibleComponent: IVisibleComponent = {
        bookShelf: <Bookshelf />,
        addBookForm: <AddBookForm />,
        archive: <Archive />,
    };
    return (visibleComponent[activePage]);
};

const mapStateToProps = (state: any) => ({
    activePage: state.page.activePage,
});

export default connect(mapStateToProps, undefined)(MainArea);
