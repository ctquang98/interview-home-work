import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    posts: postsReducer,
    user: userReducer
});

export default rootReducers;