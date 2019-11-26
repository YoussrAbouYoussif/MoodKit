const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const Mood = require('../../models/Mood')
const userValidations = require('../../validations/userValidations')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys_dev').secretOrKey
const passport = require('passport')
require('../../config/passport')(passport)

//Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: 'Email does not exist' })
    const match = bcrypt.compareSync(password, user.password)
    if (match) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      console.log('Hello')
      const token = jwt.sign(payload, tokenKey, { expiresIn: '24h' })
      console.log('Hello2')
      res.json({ data: `Bearer ${token}` })
      console.log('Hello3')
      return res.json({ data: 'Token' })
    } else
      return res
        .status(400)
        .send(
          { password: 'Wrong password', msg: 'wrong password' },
          console.log('WRONG')
        )
  } catch (e) {}
})

//Get Random Int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

//Calculating Score
router.get(
  '/CalculateScore',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    var returnedScore = [0, 0, 0, 0, 0, 0]
    const user = await User.findById(req.user.id)
    const arrayOfAnswers = user.arrayOfAnswers
    var moodName
    for (var i = 0; i < arrayOfAnswers.length; i++) {
      if (arrayOfAnswers[i] === 'a') {
        returnedScore[0] = returnedScore[0] + 1
      } else if (arrayOfAnswers[i] === 'b') {
        returnedScore[1] = returnedScore[1] + 1
      } else if (arrayOfAnswers[i] === 'c') {
        returnedScore[2] = returnedScore[2] + 1
      } else if (arrayOfAnswers[i] === 'd') {
        returnedScore[3] = returnedScore[3] + 1
      } else if (arrayOfAnswers[i] === 'e') {
        returnedScore[4] = returnedScore[4] + 1
      } else if (arrayOfAnswers[i] === 'f') {
        returnedScore[5] = returnedScore[5] + 1
      }
    }
    var max = Math.max(...returnedScore)
    if (returnedScore[0] === max) {
      moodName = 'Happy'
    } else if (returnedScore[1] === max) {
      moodName = 'Sad'
    } else if (returnedScore[2] === max) {
      moodName = 'Lonely'
    } else if (returnedScore[3] === max) {
      moodName = 'Frustrated/Annoyed'
    } else if (returnedScore[4] === max) {
      moodName = 'Stressed/Nervous'
    } else if (returnedScore[5] === max) {
      moodName = 'Depressed'
    }
    const mood = await Mood.findOne({ moodName })
    var activityArray = mood.activities
    var randomInt = getRandomInt(4)
    var returnedActivities = activityArray[randomInt]
    res.json({ data: returnedActivities })
  }
)

// Get All Users
router.get('/', async (req, res) => {
  const users = await User.find()
  res.json({ data: users })
})

// Get By ID
router.get(
  '/SpecificUser',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = await User.findById(req.user.id)
    return res.json({ data: user })
  }
)

//Create New User
router.post('/', async (req, res) => {
  const newUser = await User.create(req.body)
  return res.json({ data: newUser })
})

//Update User
router.put(
  '/UpdateUser',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      //   const id = req.params.id
      const user = await User.findById(req.user.id)
      if (!user) return res.status(404).send({ error: 'User does not exist' })
      const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      )
      res.json({ msg: 'User updated successfully' })
    } catch (error) {
      console.log(error)
    }
  }
)

//Delete User
router.delete(
  '/DeleteUser',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const id = req.user.id
      const deletedUser = await User.findByIdAndRemove(id)
      res.json({ msg: 'User was deleted successfully' })
    } catch (error) {
      console.log(error)
    }
  }
)

router.post('/register', async (req, res) => {
  console.log(req.body)
  const isValidated = userValidations.createValidation(req.body)
  if (isValidated.error) {
    console.log(isValidated.error.details[0].message)
    return res.status(400).send({
      msg: isValidated.error.details[0].message,
      error: 'validation error'
    })
  }
  const body = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password
  }
  const user = await User.findOne({ email: body.email })
  if (user) {
    console.log('already exist')
    return res
      .status(400)
      .json({ error: 'Email already exists', msg: 'Email already exists' })
  }
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(body.password, salt)
  const newUser = new User({
    name: body.name,
    email: body.email,
    password: hashedPassword,
    gender: body.gender,
    dateOFBrith: body.dateOfBirth
  })
  newUser
    .save()
    .then(user => res.json({ data: user }))
    .catch(err => res.json({ error: 'Can not create user' }, console.log(err)))
})

// Change password
router.post(
  '/changePassword',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const userid = req.user.id
    const user = await User.findById(req.user.id)
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const confirmPassword = req.body.confirmPassword
    const doesItMatch = await bcrypt.compareSync(oldPassword, user.password)
    if (doesItMatch) {
      if (newPassword === confirmPassword) {
        const salt = await bcrypt.genSalt(10)
        newPasswordEnc = await bcrypt.hash(newPassword, salt)
        user.password = newPasswordEnc
        await user.save()
        return res.json({
          msg: 'Password was updated successfully',
          data: user
        })
      } else return res.json({ msg: 'The passwords do not match!' })
    } else {
      return res.json({
        msg:
          'The old password does not match with your current password! Please check it again'
      })
    }
  }
)

module.exports = router
