const { default: mongoose } = require("mongoose");

const volunterNewEvent = mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter your title"],
  },
  date: {
    type: String,
    default: Date,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("newEvent", volunterNewEvent);
