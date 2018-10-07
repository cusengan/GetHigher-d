const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    recommendations: []
});

var User = mongoose.model('User', UserSchema);

module.exports = { User };