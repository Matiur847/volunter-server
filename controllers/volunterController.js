const volunter = require("../models/volunterModel");
const newVolunterEvent = require("../models/addVolunterModel");
const {
  Types: { ObjectId },
} = require("mongoose");
const cloudinary = require("cloudinary");

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

const deleteActiveVolunter = async (req, res) => {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      const deleteVolunter = await volunter.findByIdAndDelete(id);
      res.send({
        success: true,
        message: "Volunter Deleted Successfully",
      });
    } else {
      res.send("Error --------");
    }
  } catch (error) {
    res.send(error);
  }
};

getAllVolunterList = async (req, res) => {
  try {
    const AllVolunterList = await volunter.find({});
    res.status(200).json({
      success: true,
      AllVolunterList,
    });
  } catch (error) {
    res.send(error);
  }
};

// add new volunter event
const addVolunter = async (req, res) => {
  try {
    const cloud = await cloudinary.v2.uploader.upload(req.body.img, {
      folder: "volunterImg",
      width: 150,
      crop: "scale",
    });
    const { title, date, description } = req.body;
    const newEvent = newVolunterEvent({
      title: title,
      date: date,
      description: description,
      img: {
        public_id: cloud.public_id,
        url: cloud.secure_url,
      },
    });
    await newEvent.save().then((event) => {
      res.send({
        success: true,
        newEvent,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  registerVolunter,
  getActiveVolunter,
  deleteActiveVolunter,
  getAllVolunterList,
  addVolunter,
};
