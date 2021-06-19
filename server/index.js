const express = require("express");
const morgan = require("morgan");
const { dbConnect } = require("./src/Config/Database/index");
const app = express();


app.use(express.json({ extended: false }));
app.use(morgan("dev"));


app.use("/api/v1", require("./Routes/index.route"));
const PORT = 5000 || process.env.PORT;

dbConnect();
app.listen(PORT, () => {
  console.log(`your app is running on PORT ${PORT}`);
});