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