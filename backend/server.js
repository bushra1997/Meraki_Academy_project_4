const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();

//routers

//built-in middlewares
app.use(express.json());

app.use(cors());

const articlesRouter = require("./routers/routes/articles");

app.use("/articles", articlesRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
