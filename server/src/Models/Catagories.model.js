const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema(
  {
    catagories: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);
exports.CatModel = mongoose.model("Cat", catSchema);
