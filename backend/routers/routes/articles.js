const express = require("express");
const {createArticles} = require("../controllers/articles");
const articlesRouter = express.Router();

articlesRouter.post("/", createArticles);

module.exports = articlesRouter;
