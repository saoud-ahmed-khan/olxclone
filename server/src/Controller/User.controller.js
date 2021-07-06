const bcrypt = require("bcrypt");

const jwt= require("jsonwebtoken")
const { userModel } = require("../Models/user.models");

exports.signup = async (req, res) => {
  const { username, phone, city, password, address } = req.body;
  if (!username || !phone || !city || !password || !address) {
    return res.json({
      success: false,
      message: "data  not found  for  user table",
    });
  }
  try {
    const user = await userModel.findOne({ phone });
    if (user) {
      return res.json({
        success: false,
        message: "phone number already aquire by user",
      });
    }
    const salt = await bcrypt.genSalt(9);
    const hashPass = await bcrypt.hash(password, salt);
    const createUser = userModel.create({
      username,
      phone,
      city,
      password: hashPass,
      address,
    });
    (await createUser).save();
    res.json({ success: true, message: "user created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      success: false,
      error: error.message,
      message: " internal server error",
    });
  }
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await userModel.findOne({ phone });
    if (!user) {
      return res.json({
        success: false,
        message: "phone/user not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "password not match",
      });
    }
    const payload = {
      phone: user.phone,
      id: user._id,
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    return res.json({ success: true, message: "success", user, token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send({
      success: false,
      error: e.message,
      message: " internal server error",
    });
  }
};

exports.usermain = async (req, res) => {
  return res.json({
    success: true,
    message: "you are in main route",
  });
};
