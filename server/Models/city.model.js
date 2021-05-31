const mongoose = require("mongoose");
const schema = mongoose.Schema;

const citySchema = new schema(
  {
    cities: {
      type: String,
      trim: true,
      require: true,
    }
  },
  { timestamps: true }
);
exports.cityModel = mongoose.model("City", citySchema);
