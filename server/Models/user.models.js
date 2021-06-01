const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema(
  {
    username: {
      required: true,
      trim: true,
      lowercase: true,
      type: String,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    city: {
      type: schema.Types.ObjectId,
      ref: "city",
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);
exports.userModel = mongoose.model("User", userschema);
