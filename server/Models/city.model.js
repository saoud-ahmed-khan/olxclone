const mongoose = require("mongoose");
const schema = mongoose.Schema;

const citySchema = new schema(
  {
    cities: {
      type: String,
      trim: true,
      required: true,
    }
  },
  { timestamps: true }
);
exports.cityModel = mongoose.model("City", citySchema);
