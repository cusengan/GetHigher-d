const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
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