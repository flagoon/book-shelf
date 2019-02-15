import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { NoMatch } from '../Common/ErrorPages/404_page';
import AddBookForm from './AddBookForm/AddBookForm';
import Archive from './Archive/Archive';
import Bookshelf from './Bookshelf/Bookshelf';
import {AddBookButton, StyledMainArea} from './MainArea.styled';
import { SingleBook } from './SingleBook/SingleBook';

const MainArea = () => {
    return (
        <StyledMainArea>
            <Link to='/addbook' style={{ textDecoration: 'none', display: 'inline' }}>
                <AddBookButton>➕ Add book</AddBookButton>
            </Link>
            <Switch>
                <Route exact path='/' component={Bookshelf} />
                <Route path='/bookshelf' component={Bookshelf} />
                <Route exact path='/archive' component={Archive} />
                <Route path='/addbook' component={AddBookForm} />
                <Route path='/book/:bookId' component={SingleBook} />
                <Route component={NoMatch} />
            </Switch>
        </StyledMainArea>
    );
};

export default MainArea;
