const {cityModel}=require("../Models/index.model")

exports.addcities=async(req,res)=>{
    const {cities}= req.body
    try {
        const insertCity = await cityModel.create({
            cities,
        })
        insertCity.save();
    }catch (error) {
        console.log(error.message);
        return res.status(500).send({
          success: false,
          error: error.message,
          message: " internal server error",
        });
      }
}