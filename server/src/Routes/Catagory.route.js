const express = require("express");
const {catController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();

Router.post("/addcat", catController.addCat);

exports.catRouter = app.use("/cat", Router);
