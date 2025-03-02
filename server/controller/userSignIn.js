const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
require('dotenv').config();

const userSignInController = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }


        let user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("There is no user with this account");
        }

        let isAuthenticated = await bcrypt.compare(password, user.password);

        if (!isAuthenticated) {
            throw new Error("Please check password");
        }
        
        let token = jwt.sign({_id:user._id,email:user.email},process.env.TOKEN_KEY,{expiresIn: '1h'});

        const cookieOption = {
            httpOnly:true,
            secure:true
        };

        res.cookie('token',token,cookieOption).json({
            message:"Login successfully",
            data: token,
            success:true,
            error:false
        });


    } catch (error) {

        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }

};

module.exports = userSignInController;