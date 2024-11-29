
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userModel = require('../models/userModel');
const userController = require('../controllers/user.controller');
const authMiddleWare = require('../middlewares/auth.middleware');




router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname').isLength({min:3}).withMessage('Name must be at least 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
],
userController.registerUser
)


router.post('/loginUser', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least')
],
userController.loginUser
)

router.get('/profile', authMiddleWare.authUser, userController.getUserProfile)

module.exports = router;


