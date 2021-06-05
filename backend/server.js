

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const db = require('./db/db');

const articlesRouter = require("./routers/routes/articles")
const userDataRouter = require("./routers/routes/userdata")
const commentRouter=require("./routers/routes/comments")


const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//routers

//built-in middlewares
app.use(express.json());








//third-party middleware
app.use(cors());

//app routers
// app.use('/users', usersRouter);

app.use('/articles', articlesRouter);
app.use('/userData', userDataRouter);

app.use("/articles/:id/comments",commentRouter);


// app.use(authRouter);
// app.use(commentsRouter);
// app.use(roleRouter);


// Set templating engine
app.set("view engine", "ejs");

// Navigation
app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});




app.post(
  "/register",
  urlencodedParser,
  [
    check("id", "ID consist of 10 numbers")
      .exists()
      .isLength({ min: 10, max: 10 }),
    check("email", "Email is not valid").exists().isEmail().normalizeEmail(),
    check("password", "Please enter a strong Password")
      .exists()
      .isLength({ min: 8, max: 15 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
	if(!errors.isEmpty()){
		// return res.status(422).jsonp(errors.array())
		const alert = errors.array();
		res.render('register', {alert})
	}else{
		user.save()
	}
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
