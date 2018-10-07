const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', (req, res) => {
    console.log('users');
    res.send('users');
});

router.get('/all', (req, res) => {
    User.find().then((users) => {
      res.send({users});
    }).catch((e) =>{
      res.status(400).send();
    });
  });

router.post('/register', (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
    user.save().then((user) => {
        res.send({user});
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