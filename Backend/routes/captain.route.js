const express = require('express');
const router = express.Router();
const { body} = require('express-validator');

const captainModel = require('../models/captain.model');
const captainController = require('../controllers/captain.controller');

router.post('/create', [
    body('fullname').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').not().isEmpty().withMessage('Password is required'),
    body('color').isEmpty().withMessage('Vehicle colour is required'),
    body('vehicleType').isEmpty().withMessage('vehicle Type is required'),
    body('plateNumber').isEmpty().withMessage('Vehicle Registration Number is required'),
    body('capacity').isEmpty().withMessage('vehicle capacity is required')
    
],

captainController.registerCaptain
);

module.exports = router;