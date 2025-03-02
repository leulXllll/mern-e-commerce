const express = require('express');
const userSignUpController = require('../controller/userSignUp');
const userLoginController = require('../controller/userSignIn');
const { userDetails} = require('../controller/userDetails');
const { authToken }= require('../middleware/authToken');
const router = express.Router();



router
    .post('/signup',userSignUpController)
    .post('/signin',userLoginController)
    .get('/user-details',authToken,userDetails);

module.exports = router;