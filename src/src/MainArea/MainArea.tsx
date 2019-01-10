import * as React from 'react'
import AddBookForm from './AddBookForm/AddBookForm'
import Bookshelf from './Bookshelf/Bookshelf'
import Archive from './Archive/Archive'
import { connect } from 'react-redux';

interface IProps {
    activePage: string;
}

type eVisibleComponent = {
    bookShelf: JSX.Element;
    addBookForm: JSX.Element;
    archive: JSX.Element;
    [key: string]: JSX.Element;
  }

const MainArea = (props: IProps) => {
    const {activePage} = props;
    const visibleComponent: eVisibleComponent = {
        bookShelf: <Bookshelf />,
        addBookForm: <AddBookForm />,
        archive: <Archive />
    }
    return (visibleComponent[activePage])
}

const mapStateToProps = (state: any) => ({
    activePage: state.activePage
})

const mapDispatchToState = {
    
}

export default connect(mapStateToProps)(MainArea)