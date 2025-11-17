const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  searchProducts,
  updateStock,
  toggleAvailability,
  getRecommendedProducts,
} = require("../controllers/productController");

// CRUD Routes
router.post("/add", addProduct);
router.get("/all", getAllProducts);
router.get("/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

// Advanced Features
router.get("/category/:name", getProductsByCategory);
router.get("/search", searchProducts);
router.put("/update-stock/:id", updateStock);
router.put("/toggle-availability/:id", toggleAvailability);
router.get("/recommended", getRecommendedProducts);

module.exports = router;
