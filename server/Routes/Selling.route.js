const express = require("express");
const { sellController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();

Router.post("/itemsell", sellController.selling);

exports.sellRouter = app.use("/sell", Router);
