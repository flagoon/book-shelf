import { createStore } from 'redux';
import rootReducer from './reducers/index';

declare global {
    // tslint:disable-next-line
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Bookshelf'}),
);

export default store;
