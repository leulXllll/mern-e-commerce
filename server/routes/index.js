const express = require('express');
const userSignUpController = require('../controller/userSignUp');
const userLoginController = require('../controller/userSignIn');
const router = express.Router();

router
    .post('/signup',userSignUpController)
    .post('/login',userLoginController);

module.exports = router;