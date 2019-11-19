const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const Question = new Schema({
  moodName: { type: String, required: true },
  activities: [[{ type: String }]]
})

module.exports = question = mongoose.model('moods', Mood)
