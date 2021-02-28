import api from './index';

// export const getPosts = () => {
//     return new Promise((resolve, reject) => {
//         api.get('/posts')
//             .then(res => {
//                 const { data } = res;
//                 resolve(data);
//             })
//             .catch(err => reject(err));
//     });
// }

export const getComments = postId => {
    return new Promise((resolve, reject) => {
        api.get(`/posts/${postId}/comments`)
            .then(res => {
                const { data } = res;
                resolve(data);
            })
            .catch(err => reject(err));
    })
}