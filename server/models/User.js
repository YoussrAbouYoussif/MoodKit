const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const moment = require('moment');

const User = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  arrayOfAnswers: [{ type: String }]
})

module.exports = user = mongoose.model('users', User)
