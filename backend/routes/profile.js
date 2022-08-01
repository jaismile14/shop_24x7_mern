const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Get All Profiles
router.get(`/`, async (req, res) =>{
    const userList = await User.find().select('-password');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send({status:'success',profile:userList}) 
    //res.send(userList);
})

//Get User by ID
router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id).select('-password');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})


//Update Profile by ID
router.put('/:id',async (req, res)=> {

    const userExist = await User.findById(req.params.id);
    let newPassword
    if(req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10)
    } else {
        newPassword = userExist.password;
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            // email: req.body.email,
            // password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,       
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            profilePic:req.body.profilePic         
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})


//Delete profile
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "user not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})


module.exports =router;