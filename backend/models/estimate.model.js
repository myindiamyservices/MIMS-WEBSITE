const mongoose = require("mongoose");

const estimateSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    vehicle: String,
    location: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Estimate", estimateSchema);
