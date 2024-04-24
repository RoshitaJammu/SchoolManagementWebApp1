// models/Syllabus.js

const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
});

module.exports = mongoose.model('Syllabus', SyllabusSchema);
