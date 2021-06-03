const articles = require("../../db/models/articles");


const createNewArticles = (req, res) => {
  const { title, description, img } = req.body;
  const newArticles = new articles({

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




module.exports = {
 createNewArticles,
 getAllArticles
  
};
