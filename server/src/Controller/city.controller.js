const {cityModel } = require("../Models/index.model");

exports.addcities = async (req, res) => {
  const { cities } = req.body;
  try {
    const insertCity = await cityModel.create({
      cities,
    });
    insertCity.save();
    res.json({
        success: true,
        message: "your city is added",
        insertCity,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      success: false,
      error: error.message,
      message: " internal server error",
    });
  }
};

exports.GetAllCity = async (req, res) => {
  try {
    const user = await cityModel.find({});
    if (!user) {
      return res.json({
        success: false,
        message: "city not found",
      });
    }
    return res.json({
      success: true,
      message: "city found",
      Cities: user,
    });
  } catch (error) {
    console.log(e.message);
    return res.status(500).send({
      success: false,
      error: e.message,
      message: " internal server error",
    });
  }
};
