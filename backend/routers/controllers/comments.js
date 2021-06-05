const express = require("express");
const Comment=require("../../db/models/comments.js")
const article=require("../../db/models/articles");
const articles = require("../../db/models/articles");


//create new comment
const create_new_comment= async(req, res) => {
    let { comment, commenter } = req.body;
 let _id = req.params.id
    const comment1 = new Comment({
      comment,
      commenter,
    });
    
    await comment1
    
      .save()
      .then(async(result) => {
         await article.findOneAndUpdate({id :_id},{$push:{comments:result._id}},{new:true})
        res.json(result);
        status(201);
      })
      .catch((err) => {
        res.send(err);
      });
  };

module.exports={create_new_comment}