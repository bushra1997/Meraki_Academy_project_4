
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const articleSchema = new mongoose.Schema({
    title : {type: String , required : true},
    description : {type: String , required : true},
    img: {type: String , required :true }, 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
})
const articles = mongoose.model("Article", articleSchema);
module.exports= articles

