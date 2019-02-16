import React from 'react';
import { BooksConsumer, IBookContext } from '../../../ContextProvider/BooksProvider';
import { INotificationContext, NotificationConsumer } from '../../../ContextProvider/NotificationProvider';
import { Bookcase } from './Bookcase/Bookcase';

const Bookshelf = () => (
    <NotificationConsumer>
        {(notificationBox) => (
            <BooksConsumer>
                {(context) => {
                    {
                        const { books, changeReadStatus, changeArchiveStatus, deleteBook } = context as IBookContext;
                        const { showNotification } = notificationBox as INotificationContext;
                        return (
                            <>
                                {books
                                    .valueSeq()
                                    .filter((book) => !book.isArchived)
                                    .map((book) => (
                                        <Bookcase
                                            book={book}
                                            key={book.id}
                                            changeReadStatus={changeReadStatus}
                                            changeArchiveStatus={changeArchiveStatus}
                                            deleteBook={deleteBook}
                                            showNotification={showNotification}
                                        />
                                    ))}
                            </>
                        );
                    }
                }}
            </BooksConsumer>
        )}
    </NotificationConsumer>
);

export default Bookshelf;
