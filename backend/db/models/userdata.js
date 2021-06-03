const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    id_Number:{type:Number,unique:true},
    name:{type:String},
    age:{type:Number}
})

const userData = mongoose.model("UserData",userDataSchema);
module.exports=userData