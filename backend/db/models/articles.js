const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const articleSchema = new mongoose.Schema({
    title : {type: String , required : true},
    description : {type: String , required : true},
    img: {type: String , required :true }, 
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' },
})

module.exports = mongoose.model("Article", articleSchema);