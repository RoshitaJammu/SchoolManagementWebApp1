const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Teacher', teacherSchema);
