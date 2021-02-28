import * as types from '../../constants/actionTypes';
//import getPosts from '../../api/api';
import api from '../../api';

export const actGetPosts = posts => ({
    type: types.GET_ALL_POSTS,
    payload: posts
});

export const actFetchingData = () => ({
    type: types.FETCHING_DATA
});

export const actGetPostsRequest = () => {
    return dispatch => {
        dispatch(actFetchingData());
        return api.get('/posts')
            .then(res => {
                const { data } = res;
                dispatch(actGetPosts(data));
            })
            .catch(err => {
                console.error(err);
            });
    }
}