const mongoose = require("mongoose");

const Data = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    defult: Date.now,
  },
});
module.exports = mongoose.model("Data", Data);
