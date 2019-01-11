import actionTypes from '../actionTypes'

export const changeActivePage = (page: string) => ({
    type: actionTypes.CHANGE_ACTIVE_PAGE,
    payload: page
})