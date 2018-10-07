const express = require('express');
const router = express.Router();
const { User } = require('./models/user');

router.get('/', (req, res) => {
    res.send('users');
});

router.post('/user', (req, res) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then((user) => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send();
    });
});


router.post('/signin', (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }).then((user) => {
        if (!user) {
            return res.status(404).send({
                error: "User not found"
            });
        }

        res.send(user);
    }).catch((e) => {
        res.status(404).send(e);
    })
});

module.exports = router;