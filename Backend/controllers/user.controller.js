const userService = require('../services/user.service');
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');

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

const token = await user.generateAuthToken();
// user is created here now we can send user to frontend
res.status(200).json({token, user})

}