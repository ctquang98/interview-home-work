import * as types from '../../constants/actionTypes';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    user: null,
    loggedIn: false,
    loading: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.USER_SAVE_INFO:
            return {
                user: {...action.payload},
                loggedIn: true,
                loading: false
            }
        case types.USER_FETCHING_INFO:
            return {
                ...state,
                loading: action.payload
            }
        case types.USER_LOGOUT:
            storage.removeItem('user');
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        default: return state;
    }
}

const persistConfig = {
    key: 'user',
    storage,
    blacklist: ['loading']
}

export default persistReducer(persistConfig, userReducer);