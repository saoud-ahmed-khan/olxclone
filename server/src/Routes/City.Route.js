const express = require("express");
const { cityController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();

Router.post("/addcity", cityController.addcities);

exports.cityRouter = app.use("/city", Router);
