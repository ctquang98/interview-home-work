const Posts = require('../models/posts');
const Comments = require('../models/comments');

const posts_all = (req, res) => {
    Posts.find()
        .then(result => res.json(result))
        .catch(err => console.error(err));
};

const posts_get_comments = (req, res) => {
    Comments.find({ post: req.params.id })
        .then(result => res.json(result))
        .catch(err => console.error(err));
};

module.exports = {
    posts_all,
    posts_get_comments
};