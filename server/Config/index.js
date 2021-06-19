const dotenv = require('dotenv');
dotenv.config();

module.exports  = {
    M0NGODB_URI: process.env.M0NGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  };