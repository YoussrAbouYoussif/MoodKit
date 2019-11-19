const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const moment = require('moment');

const Question = new Schema({
  questionName: { type: String, required: true },
  answers: [{ type: String }]
})

module.exports = question = mongoose.model('questions', Question)
