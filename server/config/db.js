const mongoose = require('mongoose');

require('dotenv').config();


async function connectDb(){

    try{
         await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected");
      }catch(error){
        console.log(`Error happened ${error.message}`);
    }
}
module.exports= {connectDb};
