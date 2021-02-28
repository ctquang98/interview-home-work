import * as types from '../../constants/actionTypes';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    posts: [],
    fetching: false
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_POSTS:
            return {
                posts: [...action.payload],
                fetching: false
            };
        case types.FETCHING_DATA:
            return {
                ...state,
                fetching: true
            }
        default: return state;
    }
}

const persistConfig = {
    key: 'posts',
    storage,
    blacklist: ['fetching']
}

export default persistReducer(persistConfig, postsReducer);