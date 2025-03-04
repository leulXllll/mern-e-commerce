const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {

    try {

        let token = req.cookies['token'];


        if (!token){
            return res.json({
                message: "User not Login",
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.TOKEN_KEY, function (error, decode) {

            if (error) {
               return res.json({
                    message: 'User not authorized',
                    error: true,
                    success: false
                });
            }
            // console.log('decoded value is ', decode);

    
            req.id= decode?._id;

            next();

        });

    } catch (error) {

        res.status(400).json({
            message: error.message,
            error: true,
            data: [],
            success: false
        })
    }
}
module.exports = { authToken };