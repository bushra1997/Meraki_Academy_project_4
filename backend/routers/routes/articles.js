const express = require("express");
const {createNewArticles,getAllArticles} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createNewArticles);
articlesRouter.get("/", getAllArticles);

module.exports = articlesRouter;
