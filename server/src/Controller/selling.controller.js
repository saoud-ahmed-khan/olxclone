const { sellingModel } = require("../Models/index.model");

exports.selling = async (req, res) => {
  const { userid, catid, title, description, price, isSold } = req.body;
  try {
    const sellingData = await sellingModel.create({
      userid,
      catid,
      title,
      description,
      price,
      isSold,
      productImage: req.file.orig,
    });
    sellingData.save();
    res.json({
      success: true,
      message: "This Particular Product is sold",
      sellingData,
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
