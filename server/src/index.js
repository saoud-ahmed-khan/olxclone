const express = require("express");
const morgan = require("morgan");
const { dbConnect } = require("./Database/index");
const path = require("path");
const app = express();
var cookieParser = require("cookie-parser");

var cors = require("cors");

require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? path.resolve(".env.dev")
      : path.resolve(".env"),
});

app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use("/api/v1", require("./Routes/index.route"));
const PORT = 5000 || process.env.PORT;

dbConnect();
app.listen(PORT, () => {
  console.log(`your app is running on PORT ${PORT}`);
  console.log(process.env.NODE_ENV);
});
