const Comments = require('../models/comments');

const comments_all = (req, res) => {
    Comments.find()
        .then(result => res.json(result))
        .catch(err => console.error(err));
};

module.exports = { comments_all };