import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BooksConsumer, IBookContext } from '../../../ContextProvider/BooksProvider';
import { INotificationContext, NotificationConsumer } from '../../../ContextProvider/NotificationProvider';
import { Bookcase } from '../Bookshelf/Bookcase/Bookcase';
import { NoBook } from './NoBook';

interface ILink {
    bookId: string;
}

interface IProps extends RouteComponentProps<ILink> {}

export const SingleBook = (props: IProps) => {
    const bookId = props.match.params.bookId;
    return (
        <NotificationConsumer>
            {(notificationContext) => (
                <BooksConsumer>
                    {(context) => {
                        {
                            const {
                                books,
                                deleteBook,
                                changeReadStatus,
                                changeArchiveStatus,
                            } = context as IBookContext;
                            const { showNotification } = notificationContext as INotificationContext;
                            const archivedBook = books.get(bookId);
                            if (archivedBook) {
                                return (
                                    <Bookcase
                                        book={archivedBook}
                                        key={archivedBook.id}
                                        changeReadStatus={changeReadStatus}
                                        changeArchiveStatus={changeArchiveStatus}
                                        deleteBook={deleteBook}
                                        showNotification={showNotification}
                                    />
                                );
                            }
                            return <NoBook>There is no book with that id!</NoBook>;
                        }
                    }}
                </BooksConsumer>
            )}
        </NotificationConsumer>
    );
};
