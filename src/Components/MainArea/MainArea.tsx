import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
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

const NoMatch = () => {
    return (
        <StyledNoMatch>
            <h1>Failed Match!</h1>
            <Link to='/'>Go back!</Link>
        </StyledNoMatch>
    );
};

const StyledNoMatch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        color: red;
        font-size: 10rem;
    }
`;

export default MainArea;
