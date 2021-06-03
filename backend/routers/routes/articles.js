const express = require("express");
const {createNewArticles} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createNewArticles);

module.exports = articlesRouter;
