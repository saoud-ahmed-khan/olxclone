const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  cat: {
    type: Schema.Types.ObjectId,
    ref: "Cat",
    require: true,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  price: {
    type: String,
    require: true,
    trim: true,
  },
  isSold: {
    type: Boolean,
    default: false,
    require: true,
  }
});

exports.sellingModel = mongoose.model("Selling", sellingSchema);
