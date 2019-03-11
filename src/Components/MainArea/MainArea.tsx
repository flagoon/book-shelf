import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowNotificationType } from '../../ContextProvider/NotificationProvider';
import { NoMatch } from '../Common/ErrorPages/404_page';
import Archive from './Archive/Archive';
import Bookshelf from './Bookshelf/Bookshelf';
import { AddBookButton, StyledMainArea } from './MainArea.styled';
import { SingleBook } from './SingleBook/SingleBook';

interface IMainAreaProps {
    showNotification: (type: ShowNotificationType) => void;
}

const MainArea = ({ showNotification }: IMainAreaProps) => {
    function showFormNotification(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        showNotification('SHOW_FORM');
    }
    return (
        <StyledMainArea>
            <AddBookButton onClick={showFormNotification}>➕ Add book</AddBookButton>
            <Switch>
                <Route exact path="/" component={Bookshelf} />
                <Route path="/bookshelf" component={Bookshelf} />
                <Route exact path="/archive" component={Archive} />
                <Route path="/book/:bookId" component={SingleBook} />
                <Route component={NoMatch} />
            </Switch>
        </StyledMainArea>
    );
};

export default MainArea;
