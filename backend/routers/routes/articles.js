const express = require("express");

 
 const {createNewArticles,getAllArticles,getArticlesById,updateArticlesById,deleteArticleById} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createNewArticles);
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/:id", getArticlesById);
articlesRouter.put("/:id", updateArticlesById);
articlesRouter.delete("/:id", deleteArticleById);


module.exports = articlesRouter;
