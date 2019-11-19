const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// Get All Users
router.get('/', async (req, res) =>{
    const users = await User.find();
    res.json({ data: users });
}); 

// Get By ID
router.get('/:id', async (req, res) =>{
    const user = await User.findById(req.params.id);
    return res.json({ data: user })
}); 

//Create New User
router.post('/', async (req, res) => {
	const newUser = await User.create(req.body);
	return res.json({ data: newUser });
});

//Update User
router.put('/:id', async (req,res) => {
    try {
   //   const id = req.params.id
     const user = await User.findById(req.params.id)
     if(!user) return res.status(404).send({error: 'User does not exist'})
     const updatedUser = await User.findByIdAndUpdate({_id : req.params.id},req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {

        console.log(error)
    }  
 })

 //Delete User
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully'})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;