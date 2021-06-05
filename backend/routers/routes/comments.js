const express = require("express");
const {create_new_comment,update_commentByID,delete_commentById} =require("../controllers/comments")
const commentRouter=express.Router()


 commentRouter.post("/",create_new_comment)
 commentRouter.put("/:id",update_commentByID)
 commentRouter.delete("/:id",delete_commentById)
 
module.exports = commentRouter