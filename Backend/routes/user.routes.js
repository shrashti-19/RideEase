const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require("../middlewares/auth.middlewares");
//the data we are getting from frontend we have to validate the data  - express validator
const {body} = require("express-validator");

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name should be 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long'),
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 6}).withMessage('Password')
],
  userController.loginUser
)

//profile for the user

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);
module.exports = router;

