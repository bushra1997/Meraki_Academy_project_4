const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const articleSchema = new mongoose.Schema({
    title : {type: String , required : true},
    description : {type: String , required : true},
    img: {type: String , required :true }, 
})

module.exports = mongoose.model("Article", articleSchema);