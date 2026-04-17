const mongoose = require("mongoose");

const callbackSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Callback", callbackSchema);