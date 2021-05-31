const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/olx", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("mongo db connected successfully");
  } catch (e) {
    console.log(`unable to connect: ${e.message}`);
  }
};
exports.dbConnect = dbConnect;
