const jwt = require('jsonwebtoken');

async function authToken(req,res,next){

    try{
        console.log('auh reached here');
        // console.log('token is',req.cookie);
        
        console.log('tokenn is',tokenn);
        let tokenn = req.cookie.token;

        const token = req.cookie?.token || req.header;
        console.log('token is ',token);


        if(!token){
            throw new Error("You are not authorized");
        }
        
        let decoded =  jwt.verify(token,process.env.TOKEN_KEY);
        
        // if(decoded)

        console.log('data is ',decoded);
        

    }catch(error){
        res.status(400).json({
            message:error.message,
            error:true,
            data:[],
            success:false
        })
    }
}
module.exports = {authToken};