const express = require("express");
const {createNewUserData,getUserDataById_Number} = require("../controllers/userdata")

const userDataRouter = express.Router();


userDataRouter.post("/",createNewUserData)
userDataRouter.get("/",getUserDataById_Number)


module.exports= userDataRouter;
