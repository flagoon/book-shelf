import React from 'react';

const defaultValue = { one: 1, two: 2 };
const { Provider, Consumer } = React.createContext(defaultValue);

class BooksProvider extends React.Component<{}, { one: number; two: number }> {
    public state = {
        one: 1,
        two: 2,
    };
    public render() {
        return <Provider value={{ one: this.state.one, two: this.state.two }}>{this.props.children}</Provider>;
    }
}

export { BooksProvider, Consumer as BooksConsumer };
