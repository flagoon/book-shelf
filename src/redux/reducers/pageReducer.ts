import actionTypes from '../actionTypes';

export interface IChangePageAction {
  activePage: string;
}

interface IPageReducerAction {
  type: string;
  payload: IChangePageAction;
}

const initialState = {
  activePage: 'bookShelf',
};

export const pageReducer = (
  state = initialState,
  action: IPageReducerAction,
) => {
  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_PAGE:
      return action.payload;
    default:
      return state;
  }
};
