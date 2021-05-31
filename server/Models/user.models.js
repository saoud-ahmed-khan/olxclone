const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema(
  {
    username: {
      require: true,
      trim: true,
      lowercase: true,
      type: String,
    },
    phone: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    city: {
      type: schema.Types.ObjectId,
      ref: "city",
      require: true,
    },
    password: {
      type: String,
      trim: true,
      require: true,
    },
    address: {
      type: String,
      trim: true,
      require: true,
    },
  },
  { timestamps: true }
);
exports.userModel = mongoose.model("User", userschema);
