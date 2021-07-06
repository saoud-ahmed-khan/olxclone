const express = require("express");
const { userController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();

Router.get("/", userController.usermain);
Router.post("/signup", userController.signup);
Router.post("/signin", userController.login);

exports.userRouter = app.use("/user", Router);
