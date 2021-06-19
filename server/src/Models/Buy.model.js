const mongoose = require("mongoose");
const Schema= mongoose.Schema

const BuySchema= new Schema({
    sellItem: {
        type: Schema.Types.ObjectId,
        ref: "city",
        required: true,
      },
      user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      }
},{timestamps:true})

exports.BuyModel= mongoose.model("Buy",BuySchema)
