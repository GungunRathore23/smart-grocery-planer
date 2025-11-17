const Product = require("../models/productModel");

// 1. Add Product
exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: " Product added successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: " Error adding product", error: error.message });
  }
};

// 2. Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: " Error fetching products", error: error.message });
  }
};

// 3. Get Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: " Error fetching product", error: error.message });
  }
};

// 4. Update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(400).json({ message: "Error updating product", error: error.message });
  }
};

//  5. Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: " Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: " Error deleting product", error: error.message });
  }
};

// 6. Get Products by Category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const products = await Product.find({ category: name });
    if (products.length === 0)
      return res.status(404).json({ message: "No products found in this category" });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: " Error fetching category products", error: error.message });
  }
};

//  7. Search Products by Name
exports.searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await Product.find({
      name: { $regex: q, $options: "i" }, // case-insensitive search
    });
    if (products.length === 0)
      return res.status(404).json({ message: "No matching products found" });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: " Error searching products", error: error.message });
  }
};

// 8. Update Stock Quantity
exports.updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.quantity = quantity;
    await product.save();
    res.status(200).json({ message: "Stock updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: " Error updating stock", error: error.message });
  }
};

// 9. Toggle Availability Status
exports.toggleAvailability = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.status = product.status === "Available" ? "Out of Stock" : "Available";
    await product.save();

    res.status(200).json({ message: "Product availability toggled", product });
  } catch (error) {
    res.status(500).json({ message: " Error toggling availability", error: error.message });
  }
};

// 10. Recommended Products (price or custom logic)
exports.getRecommendedProducts = async (req, res) => {
  try {
    const products = await Product.find({ price: { $lte: 200 }, status: "Available" });
    if (products.length === 0)
      return res.status(404).json({ message: "No recommended products found" });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recommended products", error: error.message });
  }
};
