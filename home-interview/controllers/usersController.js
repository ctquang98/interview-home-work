const Users = require('../models/users');

const users_all = (req, res) => {
    Users.find()
        .then(result => res.json(result))
        .catch(err => console.error(err));
};

const users_login = (req, res) => {
    const { username, password } = req.body;
    if(username && password) {
        Users.find({ username, password })
        .then(result => res.json(result))
        .catch(err => console.error(err));
    }
    else {
        res.json({ error: 'Not found' });
    }
};

module.exports = {
    users_all,
    users_login
};