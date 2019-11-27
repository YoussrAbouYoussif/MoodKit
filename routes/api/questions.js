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
router.get('/getByNumber/:questionNumber', async (req, res) =>{
    try
    {
    const questionNumber = parseInt(req.params.questionNumber,10)
    var question = await Question.find();
    var requiredQuestion;
    for(var i =0;i<question.length;i++)
    {
        var number = question[i].questionNumber
        if(questionNumber===number)
        {
            requiredQuestion=question[i]
        }
    }
    return res.json({ data: requiredQuestion})
}
    catch(err)
    {
        console.log(err)
    }
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