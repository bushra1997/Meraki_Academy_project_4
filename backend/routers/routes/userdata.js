const express = require("express");
const {createNewUserData} = require("../controllers/userdata")

const userDataRouter = express.Router();


userDataRouter.post("/",createNewUserData)


module.exports= userDataRouter;
