const userService = require('../services/user.service');
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');
const blacklistToken = require('../models/blacklistToken.model');
// shahnawaj
module.exports.registerUser = async (req, res, next) =>{

const errors = validationResult(req);

if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}

const {fullname, email, password} = req.body;
const isUserExists = await userModel.findOne({email});
if(isUserExists){
    return res.status(400).json({message: 'user already exists'});
}
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

    
    const token = await user.generateAuthToken({userid:user._id});

    res.status(201).json({token, user});
}

module.exports.getUserProfile = async (req, res ,next)=>{

    res.status(200).json(req.user);
}
module.exports.logoutUser = async (req, res ,next)=>{
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blacklistToken.create({token});

    res.status(200).json({message: 'Logout sucessfully'});
}