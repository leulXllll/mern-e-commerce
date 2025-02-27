const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email :{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:String
},{
    timestamps:true
});

const userModel = mongoose.model('User',userSchema);


module.exports = userModel;