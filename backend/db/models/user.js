const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    nationality : {type: String , required : true},
    id_number : {type: Number , required : true},
    name: {type: String , required :true }, 
    date_of_birth : {type :Date , required:true },
    location: {type : String , required : true},
    email: {type : String , required : true , unique: true},
    password: {type : String , required : true}
})

module.exports = mongoose.model("User", userSchema);





