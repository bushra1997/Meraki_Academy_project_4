const express = require("express");

 
 const {createNewArticles,getAllArticles,getArticlesById} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createNewArticles);
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/:id", getArticlesById);


module.exports = articlesRouter;
