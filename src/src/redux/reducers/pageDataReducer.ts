import actionTypes from '../actionTypes';

const initialState = {
    activePage: 'bookShelf'
}

export const pageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CHANGE_ACTIVE_PAGE:
            return action.payload;
        default:
            return state;
    }
}