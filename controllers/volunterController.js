const volunter = require("../models/volunterModel");
const newVolunterEvent = require("../models/addVolunterModel");
const {
  Types: { ObjectId },
} = require("mongoose");
const cloudinary = require("cloudinary");
const { getAuth } = require("firebase-admin/auth");

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

// get all register volunter event
const getAllNewVolunter = async (req, res) => {
  try {
    const allNewVolunter = await newVolunterEvent.find({});
    res.status(200).json({
      success: true,
      allNewVolunter,
    });
  } catch (error) {
    res.send(error.message);
  }
};

// get all users from firebase project
let allUser = {};
const getAllUserFromFirebase = async (req, res) => {
  try {
    await getAuth()
      .listUsers()
      .then((users) => {
        allUser = users;
      })
      .catch((error) => {
        console.log(error.code);
      });
    res.status(200).json({
      success: true,
      users: allUser,
    });
  } catch (error) {
    res.send("error.message", error);
  }
};

// delete user from firebase
const deleteUserFromFirebase = (req, res) => {
  try {
    const { id } = req.params;
    getAuth()
      .deleteUser(id)
      .then(() => {
        // Enter other operation here
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
    res.status(200).json({
      success: true,
      message: "User Deleted Successfullyl",
    });
  } catch (error) {
    res.send("error", error);
  }
};

module.exports = {
  registerVolunter,
  getActiveVolunter,
  deleteActiveVolunter,
  getAllVolunterList,
  addVolunter,
  getAllUserFromFirebase,
  deleteUserFromFirebase,
  getAllNewVolunter,
};
