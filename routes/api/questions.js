const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');


// Get All Questions
router.get('/', async (req, res) =>{
    const questions = await Question.find();
    res.json({ data: questions });
}); 

// Get By ID
router.get('/:id', async (req, res) =>{
    const question = await Question.findById(req.params.id);
    return res.json({ data: question })
}); 

//Get By Question Number
router.get('/:questionNumber', async (req, res) =>{
    const question = await Question.findOne(req.params.questionNumber);
    return res.json({ data: question })
}); 

//Create New Question
router.post('/', async (req, res) => {
	const newQuestion = await Question.create(req.body);
	return res.json({ data: newQuestion });
});

//Update Question
router.put('/:id', async (req,res) => {
    try {
   //   const id = req.params.id
     const question = await Question.findById(req.params.id)
     if(!question) return res.status(404).send({error: 'Question does not exist'})
     const updatedQuestion = await QUestion.findByIdAndUpdate({_id : req.params.id},req.body)
     res.json({msg: 'Question updated successfully'})
    }
    catch(error) {

        console.log(error)
    }  
 })

 //Delete Question
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedQuestion = await Question.findByIdAndRemove(id)
     res.json({msg:'Question was deleted successfully'})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;