import * as types from '../../constants/actionTypes';
import api from '../../api';

export const actGetUserInfo = (username, password) => {
    return dispatch => {
        dispatch(actFetchingUserInfo(true));
        return api.post('/users', { username, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(Array.isArray(res.data) && res.data.length) {
                    dispatch(actSaveUserInfo(res.data[0]))
                }
                else {
                    dispatch(actFetchingUserInfo(false));
                }
            })
            .catch(err => {
                console.error(err);
                dispatch(actFetchingUserInfo(false));
            });
    }
}

export const actSaveUserInfo = user => {
    return {
        type: types.USER_SAVE_INFO,
        payload: user
    }
}

export const actFetchingUserInfo = fetching => ({
    type: types.USER_FETCHING_INFO,
    payload: fetching
});

export const actLogout = () => ({
    type: types.USER_LOGOUT
});