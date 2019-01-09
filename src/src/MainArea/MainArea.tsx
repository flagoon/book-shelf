import * as React from 'react'
import AddBookForm from './AddBookForm/AddBookForm'
import Bookshelf from './Bookshelf/Bookshelf'
import Archive from './Archive/Archive'

interface IProps {
    visiblePage: string;
}

type eVisibleComponent = {
    bookShelf: JSX.Element;
    addBookForm: JSX.Element;
    archive: JSX.Element;
  }

const MainArea = ({visiblePage}: IProps) => {
    const visibleComponent: eVisibleComponent = {
        bookShelf: <Bookshelf />,
        addBookForm: <AddBookForm />,
        archive: <Archive />
    }
    return (visibleComponent[visiblePage])
}

export default MainArea;