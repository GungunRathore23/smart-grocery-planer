const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true
  },
  brand: {
    type: String,
    default: "Generic" // e.g., Amul, Tata, Nestle
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["Vegetables", "Fruits", "Dairy", "Snacks", "Beverages", "Other"],
    default: "Other"
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"]
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"]
  },
  unit: {
    type: String,
    default: "pcs" // e.g., kg, liter, packet, pcs
  },
  description: {
    type: String,
    default: "No description provided"
  },
  status: {
    type: String,
    enum: ["Available", "Out of Stock"],
    default: "Available"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
