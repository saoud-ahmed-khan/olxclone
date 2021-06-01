const express = require("express");
const { sellController } = require("../Controller/index.controller");
const app = express();
const Router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

Router.post("/itemsell", upload.single("productImage"), sellController.selling);

exports.sellRouter = app.use("/sell", Router);
