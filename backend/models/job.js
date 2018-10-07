const mongoose = require('mongoose');

const JobSchema = {

    company: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number
    }
};

var Job = mongoose.model('Job', JobSchema);

module.exports = { Job };