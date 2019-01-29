import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookshelfContainer from '../../Containers/MainArea/Bookshelf/BookshelfContainer';
import { NoMatch } from '../ErrorPages/404_page';
import AddBookForm from './AddBookForm/AddBookForm';
import Archive from './Archive/Archive';

const MainArea = () => {
    return (
        <Switch>
            <Route exact path='/' component={BookshelfContainer} />
            <Route path='/bookshelf' component={BookshelfContainer} />
            <Route path='/archive' component={Archive} />
            <Route path='/addbook' component={AddBookForm} />
            <Route component={NoMatch} />
        </Switch>
    );
};

export default MainArea;
