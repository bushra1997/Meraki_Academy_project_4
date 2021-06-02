const aticles = require("../../db/models/articles");

const createArticles = (req, res) => {
  const { title, description, img } = req.body;
  const newArticles = new aticles({
    title,
    description,
    img,
  });
  newArticles
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createArticles,
};
