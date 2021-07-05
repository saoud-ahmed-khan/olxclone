const express = require("express");
const morgan = require("morgan");
const { dbConnect } = require("./Database/index");
const app = express();
require("dotenv").config()



app.use(express.json({ extended: false }));
app.use(morgan("dev"));


app.use("/api/v1", require("./Routes/index.route"));
const PORT = 5000 || process.env.PORT;

dbConnect();
app.listen(PORT, () => {
  console.log(`your app is running on PORT ${PORT}`);
});