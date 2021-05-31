const {CatModel } = require("../Models/index.model");

exports.addCat = async (req, res) => {
  const { catagories } = req.body;
  try {
    const insertCat = await CatModel.create({
      catagories,
    });
    insertCat.save();
    res.json({
        success: true,
        message: "your city is added",
        insertCat,
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
