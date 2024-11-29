const userService = require('../services/user.service');
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');
// shahnawaj
module.exports.registerUser = async (req, res, next) =>{

const errors = validationResult(req);

if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}

const {fullname, email, password} = req.body;

const hashPassword = await userModel.hashPassword(password);

const user = await userService.createUser({
    fullname,
    email,
    password:hashPassword
})

const token = await user.generateAuthToken(user._id);
// user is created here now we can send user to frontend
res.status(200).json({token, user})

}
module.exports.loginUser = async (req, res ,next)=>{

    const errors = validationResult(req);


    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email , password} = req.body;


    const user = await userModel.findOne({email:email}).select('+password');

    if(!user){
        return res.status(401).json('invalid email or password');
    }
 const isMatch = await user.comparePassword(password, user.password);


    if(!isMatch){
        return res.status(401).json('invalid email or password');
    }
    const token = user.generateAuthToken();

    res.status(201).json({token, user});
}

module.exports.getUserProfile = async (req, res ,next)=>{

    res.status(200).json(req.user);
}