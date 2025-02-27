const bcrypt = require('bcrypt');

const userModel = require('../model/userModel');

const userSignInController = async(req,res)=>{

    const {email,password} = req.body;

    let user = await userModel.findOne({email});

    if(user){

        let isAuthenticated = await bcrypt.compare(password,user.password);


        if(!isAuthenticated){
            res.status(401).json({
                error:true,
                message:"Wrong Password"
            })
        }
        console.log('user has been authenticated');
        
        res.end();
    }

    res.end();

};

module.exports = userSignInController;