const express = require("express");
const {createArticles,getAllArticles} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createArticles);
articlesRouter.get("/", getAllArticles);
// articlesRouter.get("/:id", getArticlesById);



module.exports = articlesRouter;
