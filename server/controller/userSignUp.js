const  userModel = require('../model/userModel');
const bcrypt = require('bcrypt');


async function userSignUpController(req,res){
    try{
        
        const {name,email,password,profilePic} = req.body;
        
        if(!name){
            throw new Error("Please provide a name");
        }
        if(!email){
            throw new Error("Please provide an email");
        }
        if(!password){
            throw new Error("Please provide a password");
        }
        
            const salt =  bcrypt.genSaltSync();
            const hashedPassword = await bcrypt.hash(password,salt);
            
            
            if(!hashedPassword){
                throw new Error("Error generating password");
            }
            
            const payload = {
                ...req.body,password:hashedPassword
            }
            
            const user = new userModel(payload);
            const userSave = user.save();
            // console.log(userSave);
            

        res.status(201).json({
            data : userSave,
            success:true,
            error:false,
            message:"user created successfull"
        });     

    }catch(error){
        // console.log(error)
        res.status(500).json({
            messsage:error,
            error:true,
            success:false
        });
    }
}

module.exports = userSignUpController;