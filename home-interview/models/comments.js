const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Comments', commentSchema);