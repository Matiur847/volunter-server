const volunter = require("../models/volunterModel");

const registerVolunter = async (req, res) => {
  let { fullName, email, date, description, organize, img } = req.body;
  console.log(req.body);
  try {
    // register as a volunter
    const newRegisterVolunter = volunter({
      fullName: fullName,
      email: email,
      date: date,
      description: description,
      organize: organize,
      img: img,
    });
    await newRegisterVolunter.save().then((newVolunter) => {
      res.status(201).json({
        success: true,
        message: "Register successfully, as a volunter",
        volunter: newVolunter,
      });
    });
  } catch (error) {
    res.send(error.message);
  }
};

const getActiveVolunter = async (req, res) => {
  try {
    const allActiveVolunter = await volunter.find({});
    res.status(200).json({
      success: true,
      activeVolunter: allActiveVolunter,
    });
  } catch (error) {
    re.send(error);
  }
};

module.exports = { registerVolunter, getActiveVolunter };
