import * as React from 'react';
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

const MainAreaContent = ({ activePage }: IProps) => {
  const visibleComponent: IVisibleComponent = {
    bookShelf: <Bookshelf />,
    addBookForm: <AddBookForm />,
    archive: <Archive />,
  };
  return visibleComponent[activePage];
};

export default MainAreaContent;
