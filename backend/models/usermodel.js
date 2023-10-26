const mongoose = require("mongoose");
//create schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email: {
        type:String,
        uniqe:true,
        required:true
    },
    age:{
        type: Number,
         
    },
},
{timestamps:true}
);
//create model
const user = mongoose.model('user', userSchema)
module.exports = user;