import React, { Component } from 'react';

export type ShowNotificationType = 'DELETE' | 'ARCHIVE' | 'MARK_PAGE' | 'SHOW_FORM' | '';

export interface INotificationContext extends INotificationState {
    hideNotification: () => void;
    showNotification: (type: ShowNotificationType) => void;
}

export interface INotificationState {
    isShown: boolean;
    type: ShowNotificationType;
    bookId: string;
}

const defaultValue: INotificationContext = {
    isShown: true,
    type: '',
    bookId: '',
    hideNotification: () => undefined,
    showNotification: () => undefined,
};

const { Consumer, Provider } = React.createContext<INotificationContext>(defaultValue);

class NotificationProvider extends Component<{}, INotificationState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            type: '',
            isShown: false,
            bookId: '',
        };
        this.showNotification = this.showNotification.bind(this);
        this.hideNotification = this.hideNotification.bind(this);
    }

    public hideNotification() {
        this.setState({ isShown: false });
    }

    public render() {
        return (
            <Provider
                value={{
                    isShown: this.state.isShown,
                    type: this.state.type,
                    bookId: this.state.bookId,
                    hideNotification: this.hideNotification,
                    showNotification: this.showNotification,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }

    private readonly showNotification = (type: ShowNotificationType, id?: string) => {
        this.setState({
            isShown: true,
            type,
            bookId: id as string,
        });
    };
}

export { NotificationProvider, Consumer as NotificationConsumer };
