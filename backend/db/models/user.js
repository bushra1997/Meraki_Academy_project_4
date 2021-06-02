const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userSchema =  new mongoose.Schema({
    id_number :{type:String, unique:true},
    name:{type:String},
    userData:{},
    age:{type:Number},
    email:{type:String},
    password:{type:String},
    phoneNumber:{type:Number},
    location:{type:String} 
})



module.exports = mongoose.model("User", userSchema);








   

