const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');


async function userSignUpController(req, res) {

    try {

        const { name, email, password, profilePic } = req.body;

        if (!name) {
            throw new Error("Please provide a name");
        }
        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }

        const salt = bcrypt.genSaltSync();

        const hashedPassword = await bcrypt.hash(password.toString(), salt);

        if (!hashedPassword) {
            throw new Error("Error generating password");
        }

        console.log('profile pic is ',profilePic);

        const payload = {
            ...req.body,
            role:"GENERAL", 
            password: hashedPassword,
            profilePic : profilePic
        }

        const user = new userModel(payload);

        let doc = await userModel.findOne({ email });

        if (doc) {
            throw new Error("User Already exist");
        }   

        console.log(JSON.stringify(doc));

        let userSave = await user.save();
        
        res.status(201).json({
            data: userSave,
            success: true,
            error: false,
            message: "user created successfull"
        });


    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController;