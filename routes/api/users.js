const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Mood = require('../../models/Mood');
const userValidations = require('../../validations/userValidations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenKey = require('../../config/keys_dev').secretOrKey;
const passport = require('passport');
require('../../config/passport')(passport);

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
 router.delete('/DeleteUser', passport.authenticate('jwt', { session: false }), async (req,res) => {
    try {
     const id = req.user.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully'})
    }
    catch(error) {

        console.log(error)
    }  
 })

 router.post('/register', async (req,res) => {
    console.log(req.body)
    const isValidated = userValidations.createValidation(req.body);
    if (isValidated.error) 
    {
        console.log(isValidated.error.details[0].message);
        return  res.status(400).send({msg: isValidated.error.details[0].message ,error:"validation error"}) ;
    }
    const body={
      name:req.body.name,
      gender:req.body.gender,
      email:req.body.email,
      password:req.body.password
    }
    const user = await User.findOne({email:body.email})
    if(user) 
    {
      console.log("already exist")
      return res.status(400).json({error: 'Email already exists',msg:"Email already exists"})
    }
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(body.password,salt)
    const newUser = new User({
            name:body.name,
            email:body.email,
            password: hashedPassword ,
            gender:body.gender,
            dateOFBrith:body.dateOfBirth
        })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create user'},console.log(err)))
  });

 module.exports = router;