import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from '../ErrorPages/404_page';
import AddBookForm from './AddBookForm/AddBookForm';
import Archive from './Archive/Archive';
import Bookshelf from './Bookshelf/Bookshelf';

const MainArea = () => {
    return (
        <Switch>
            <Route exact path='/' component={Bookshelf} />
            <Route path='/bookshelf' component={Bookshelf} />
            <Route path='/archive' component={Archive} />
            <Route path='/addbook' component={AddBookForm} />
            <Route component={NoMatch} />
        </Switch>
    );
};

export default MainArea;
