import React, { PureComponent } from 'react';
import { INotificationContext, NotificationConsumer } from '../../ContextProvider/NotificationProvider';
import AddBookForm from '../MainArea/AddBookForm/AddBookForm';
import MarkPage from './MarkPage/MarkPage';
import { NotificationWrapper, OverlayBox } from './NotificationBox.styled';
import SimpleMessage from './SimpleMessage/SimpleMessage';

interface INotificationBoxProps {
    handleClose: (e: MouseEvent) => void;
}

class NotificationBox extends PureComponent<INotificationBoxProps, {}> {
    private readonly notificationRef: React.RefObject<HTMLDivElement>;

    constructor(props: INotificationBoxProps) {
        super(props);
        this.notificationRef = React.createRef();
        this.closeNotification = this.closeNotification.bind(this);
    }

    public componentDidMount(): void {
        window.addEventListener('click', this.closeNotification);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('click', this.closeNotification);
    }

    public closeNotification(e: MouseEvent) {
        const { handleClose } = this.props;

        if (!this.notificationRef.current!.contains(e.target as Node)) {
            handleClose(e);
        }
    }

    public render() {
        return (
            <NotificationConsumer>
                {(notificationContext) => {
                    const { type, bookId, hideNotification } = notificationContext as INotificationContext;
                    return (
                        <OverlayBox>
                            <NotificationWrapper ref={this.notificationRef}>
                                {(() => {
                                    switch (type) {
                                        case 'DELETE':
                                            return (
                                                <SimpleMessage
                                                    bookId={bookId}
                                                    type={'delete'}
                                                    message={'testMessage'}
                                                />
                                            );
                                        case 'ARCHIVE':
                                            return (
                                                <SimpleMessage
                                                    bookId={bookId}
                                                    type={'archive'}
                                                    message={'testMessage'}
                                                />
                                            );
                                        case 'MARK_PAGE':
                                            return <MarkPage bookId={bookId} hideNotification={hideNotification} />;
                                        case 'SHOW_FORM':
                                            return <AddBookForm hideNotification={hideNotification}/>;
                                        default:
                                            return undefined;
                                    }
                                })()}
                            </NotificationWrapper>
                        </OverlayBox>
                    );
                }}
            </NotificationConsumer>
        );
    }
}

export default NotificationBox;
