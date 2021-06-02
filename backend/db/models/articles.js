const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imge: { type: String },
});
const articles = mongoose.model("aticles", articlesSchema);
module.exports = articles;
