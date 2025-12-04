const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  ownerName: { type: String, required: true },
  password: { type: String, required: true },

  phone: { type: String },
  gst: { type: String, required: false },

  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Seller", sellerSchema);
