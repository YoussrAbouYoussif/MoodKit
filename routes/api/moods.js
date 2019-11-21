const express = require('express')
const router = express.Router()
const Mood = require('../../models/Mood')

// Get All Moods
router.get('/', async (req, res) => {
  const moods = await Mood.find()
  res.json({ data: moods })
})

// Get By ID
router.get('/:id', async (req, res) => {
  const mood = await Mood.findById(req.params.id)
  return res.json({ data: mood })
})

//Get By Mood Name
router.get('/:moodName', async (req, res) => {
  const mood = await Mood.findOne(req.params.moodName)
  return res.json({ data: mood })
})

//Create New Mood
router.post('/', async (req, res) => {
  const newMood = await Mood.create(req.body)
  return res.json({ data: newMood })
})

//Update Mood
router.put('/:id', async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id)
    if (!mood) return res.status(404).send({ error: 'Mood does not exist' })
    const updatedMood = await Mood.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    )
    res.json({ msg: 'Mood updated successfully' })
  } catch (error) {
    console.log(error)
  }
})

//Delete Mood
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deletedMood = await Mood.findByIdAndRemove(id)
    res.json({ msg: 'Mood was deleted successfully' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
