import React from 'react';
import { BooksProvider } from '../ContextProvider/BooksProvider';
import {
    INotificationContext,
    NotificationConsumer,
    NotificationProvider,
} from '../ContextProvider/NotificationProvider';
import { StyledMain } from './App.styled';
import MainArea from './MainArea/MainArea';
import Navbar from './Navbar/Navbar';
import NotificationBox from './Overlays/NotificationBox';

const App = () => {
    return (
        <StyledMain>
            <NotificationProvider>
                <BooksProvider>
                    <NotificationConsumer>
                        {(notificationContext) => {
                            // notificationContext is type INotificationContext or undefined. Destructuring is impossible
                            // because isShown or hideNotification is not present in type undefined. We need to destructure
                            // those parameters from variable that has type cast (as INotificationContext).
                            const { isShown, hideNotification } = notificationContext as INotificationContext;
                            return isShown && <NotificationBox handleClose={hideNotification} />;
                        }}
                    </NotificationConsumer>
                    <Navbar />
                    <MainArea />
                </BooksProvider>
            </NotificationProvider>
        </StyledMain>
    );
};

export default App;
