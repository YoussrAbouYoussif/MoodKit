const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const Mood = new Schema({
  moodName: { type: String, required: true },
  activities: [[{ type: String }]]
})

module.exports = mood = mongoose.model('moods', Mood)
