const { userRouter } = require("./user.route");
const { cityRouter } = require("./City.Route");
const { catRouter } = require("./Catagory.route");
const {sellRouter} = require("./Selling.route")
module.exports = [userRouter, cityRouter, catRouter,sellRouter];
