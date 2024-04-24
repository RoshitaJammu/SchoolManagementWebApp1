const mongoose = require('mongoose');

const administratorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Administrator', administratorSchema);
