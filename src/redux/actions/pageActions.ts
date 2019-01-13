import actionTypes from '../actionTypes';

export interface IChangePagePayload {
  activePage: string;
}

interface IChangePageAction {
  type: string;
  payload: IChangePagePayload;
}

export const changePageAction = (
  page: IChangePagePayload,
): IChangePageAction => {
  return { type: actionTypes.CHANGE_ACTIVE_PAGE, payload: page };
};
