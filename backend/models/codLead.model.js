const mongoose = require("mongoose");

const codLeadSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["purchase", "sale", "new_vehicle"],
      required: true,
    },
    name: String,
    phone: String,
    location: String,
    vehicle: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CodLead", codLeadSchema);
