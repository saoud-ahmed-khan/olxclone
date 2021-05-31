const mongoose = require("mongoose");
const Schema= mongoose.Schema

const BuySchema= new Schema({
    sellItem: {
        type: Schema.Types.ObjectId,
        ref: "city",
        require: true,
      },
      user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true,
      }
},{timestamps:true})

exports.BuyModel= mongoose.model("Buy",BuySchema)
