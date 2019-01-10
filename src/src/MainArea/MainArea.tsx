import * as React from 'react'
import AddBookForm from './AddBookForm/AddBookForm'
import Bookshelf from './Bookshelf/Bookshelf'
import Archive from './Archive/Archive'

interface IProps {
    activePage: string;
}

type eVisibleComponent = {
    bookShelf: JSX.Element;
    addBookForm: JSX.Element;
    archive: JSX.Element;
    [key: string]: JSX.Element;
  }

const MainArea = ({activePage}: IProps) => {
    const visibleComponent: eVisibleComponent = {
        bookShelf: <Bookshelf />,
        addBookForm: <AddBookForm />,
        archive: <Archive />
    }
    return (visibleComponent[activePage])
}

export default MainArea;