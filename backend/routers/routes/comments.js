const express = require("express");
const {create_new_comment} =require("../controllers/comments")
const commentRouter=express.Router()

commentRouter.post("/",create_new_comment)
module.exports = commentRouter