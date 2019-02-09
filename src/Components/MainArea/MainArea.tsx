import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from '../Common/ErrorPages/404_page';
import AddBookForm from './AddBookForm/AddBookForm';
import Archive from './Archive/Archive';
import Bookshelf from './Bookshelf/Bookshelf';
import { StyledMainArea } from './MainArea.styled';
import { SingleBook } from './SingleBook/SingleBook';

const MainArea = () => {
    return (
        <StyledMainArea>
            <Switch>
                <Route exact path='/' component={Bookshelf} />
                <Route path='/bookshelf' component={Bookshelf} />
                <Route exact path='/archive' component={Archive} />
                <Route path='/addbook' component={AddBookForm} />
                <Route path='/archive/:bookId' component={SingleBook} />
                <Route component={NoMatch} />
            </Switch>
        </StyledMainArea>
    );
};

export default MainArea;
