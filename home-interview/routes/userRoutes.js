const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.get('/', usersController.users_all);

router.post('/', usersController.users_login);

module.exports = router;