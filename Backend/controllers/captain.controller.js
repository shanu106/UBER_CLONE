const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blacklistedToken = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res ,next)=>{
    
    const errors = validationResult(req);
    
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
   
    const {    fullname,
        email,
        password
    } = req.body;
    const {  color,
        vehicleType,
        plateNumber,
        capacity} = req.body.vehicle;

        const isCaptainExists = await captainModel.findOne({email});

        if(isCaptainExists){
            return res.status(402).json("captain already Exists");
        }
   
const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullname,
        email,
       password: hashPassword,
       vehicleType,
       plateNumber,
       capacity,
       color
    })
    
    
    const token = await captain.generateAuthToken(captain._id);
    res.status(200).json({token, captain});
}

module.exports.loginCaptain = async (req, res, next)=> {
    const errors = validationResult(req);


    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json("Invalid email or password");
    }

    const isMatch = await captain.comparePassword(password, captain.password);

    if(!isMatch){
        return res.status(401).json("Invalid email or password");
    }
try {
    const Token = await captain.generateAuthToken(captain._id);
    const token = JSON.stringify({ Token });
    res.setHeader('Authorization', token);
    res.cookie('token', Token);
    
    res.status(200).json({Token, captain});
    
} catch (error) {
    console.log(error)
}
}

module.exports.getCaptainProfile = async (req, res, next)=>{
    res.status(201).json(req.captain);
}

module.exports.logoutcaptain = async (req,res ,next)=>{
    res.clearCookie('token');

    try {
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

    await blacklistedToken.create({token});
    res.status(200).json("Logout Success");
        
    } catch (error) {
        res.status(400).json("Internal Server Error")
    }
}