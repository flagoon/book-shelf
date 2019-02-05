import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArchiveContainer from '../../Containers/MainArea/Archive/ArchiveContainer';
import BookshelfContainer from '../../Containers/MainArea/Bookshelf/BookshelfContainer';
import { BookContainer } from '../../Containers/MainArea/SingleBook/BookContainer';
import { NoMatch } from '../ErrorPages/404_page';
import AddBookForm from './AddBookForm/AddBookForm';
import { StyledMainArea } from './MainArea.styled';

const MainArea = () => {
    return (
        <StyledMainArea>
            <Switch>
                <Route exact path='/' component={BookshelfContainer} />
                <Route path='/bookshelf' component={BookshelfContainer} />
                <Route exact path='/archive' component={ArchiveContainer} />
                <Route path='/addbook' component={AddBookForm} />
                <Route path='/archive/:bookId' component={BookContainer} />
                <Route component={NoMatch} />
            </Switch>
        </StyledMainArea>
    );
};

export default MainArea;
