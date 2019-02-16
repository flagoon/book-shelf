import React from 'react';
import { BooksConsumer, IBookContext } from '../../../ContextProvider/BooksProvider';
import MarkPageForm from './MarkPageForm';

export interface IMarkPageProps extends Partial<IBookContext> {
    bookId: string;
    hideNotification: () => void
}

function MarkPage({ bookId, hideNotification }: IMarkPageProps) {
    return (
        <BooksConsumer>
            {(bookContext) => {
                const { onMarkPageSubmit, onMarkPageChange } = bookContext;
                return (
                    <MarkPageForm
                        bookId={bookId}
                        onMarkPageSubmit={onMarkPageSubmit}
                        onMarkPageChange={onMarkPageChange}
                        hideNotification={hideNotification}
                    />
                );
            }}
        </BooksConsumer>
    );
}

export default MarkPage;
