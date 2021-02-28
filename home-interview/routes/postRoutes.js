const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.posts_all);

router.get('/:id/comments', postsController.posts_get_comments);

module.exports = router;