const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const articlesRouter = require("./routers/routes/articles")

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
// app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// app.use(authRouter);
// app.use(commentsRouter);
// app.use(roleRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
