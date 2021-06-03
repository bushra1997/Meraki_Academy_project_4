const articles = require("../../db/models/articles");

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

const getAllArticles = (req, res) => {
  articles
    .find({})

    .then((resulte) => {
      res.json(resulte);
    })
    .catch((err) => {
      res.json(err);
    });
};

// const getArticlesById = (req, res) => {
//   const id = req.params.id;
//   articles
//     .findOne({ id })
//     .then((result) => {
//       console.log(result, 8888);

//       console.log(result);
//       res.status(201);
//       res.json(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

module.exports = {
  createArticles,
  getAllArticles,
};
