// const 
async function userDetails(req,res){
    try{

        const {token} = req.cookie;
    }catch(error){

        res.status(400).json({
            message:error.message,
            error:true,
            success:true
        });
    }
}

module.exports = {userDetails};