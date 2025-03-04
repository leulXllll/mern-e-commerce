const userModel = require('../model/userModel');

async function userDetails(req,res){
    try{

        let id = req.id;

        let user = await userModel.findById(id);

        // console.log(user);

        res.json({
            data:user,
            error:false,
            success:true,
            message:"User detail"
        });
        


    }catch(error){

        res.status(400).json({
            message:error.message,
            error:true,
            success:true
        });
    }
}

module.exports = {userDetails};