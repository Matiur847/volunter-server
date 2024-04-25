const { default: mongoose } = require("mongoose");
const validator = require("validator");

const volunterSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please enter your full name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: false,
    validate: [validator.isEmail, "Please enter your valid email"],
  },
  date: {
    type: String,
    default: Date,
  },
  description: {
    type: String,
    required: true,
  },
  organize: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Volunter", volunterSchema);
