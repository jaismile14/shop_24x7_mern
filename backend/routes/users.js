const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//User Register
router.post('/register', async (req,res)=>{
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    console.log(user);
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.status(200).send({status:'success',message:'user created successfully.'}) 
    //res.send(user);
})

//User Login
router.post('/login', async (req,res) => {
    console.log("here",req.body.email)
    const user = await User.findOne({email: req.body.email});    
    const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.password)) {
        const accesstoken = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {expiresIn : '1d'}
        )
        const returnUserInfo = await User.findOne({email: req.body.email}).select('id firstName lastName email isAdmin');
        res.status(200).send({status:'success',message:'user logged in successfully.', accesstoken: accesstoken,user:returnUserInfo}) 
    } else {
       res.status(400).send('password is wrong!');
    }    
})

//Get All Users
router.get(`/`, async (req, res) =>{
    console.log("in Get All users")
    const userList = await User.find().select('-password');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})

//Get User by ID
router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id).select('-password');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})

//Create Admin User Manually
router.post('/', async (req,res)=>{
    console.log(req);
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        address:{       
            street: req.body.address.street,
            city: req.body.address.city,
            state: req.body.address.state,
            zip: req.body.address.zip
        },
        profilePic:req.body.profilePic,
        isAdmin: req.body.isAdmin
    })
    user = await user.save();

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})

//Update User by ID
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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // email: req.body.email,
            //password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,       
            address:{       
                street: req.body.address.street,
                city: req.body.address.city,
                state: req.body.address.state,
                zip: req.body.address.zip
            },
            profilePic:req.body.profilePic         
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})


//Delete User
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

//Get Total User Count
router.get(`/get/count`, async (req, res) =>{
    const userCount = await User.countDocuments((count) => count)

    if(!userCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        userCount: userCount
    });
})


module.exports =router;