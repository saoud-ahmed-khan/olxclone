const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellingSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  catid: {
    type: Schema.Types.ObjectId,
    ref: "Cat",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  isSold: {
    type: Boolean,
    default: false,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  postData: {
    type: Date,
    default: Date.now(),
  },
});

exports.sellingModel = mongoose.model("Selling", sellingSchema);
