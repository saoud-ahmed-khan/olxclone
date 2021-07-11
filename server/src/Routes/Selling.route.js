const express = require("express");
const { sellController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();
const {authMiddleware} = require('../Middleware/index')


Router.get("/catagories", authMiddleware ,sellController.mains);

exports.sellRouter = app.use("/sell", Router);