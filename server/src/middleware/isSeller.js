const express = require("express");
const { registerSeller } = require("../controllers/sellerController");
const { isAuthUser } = require("../middlewares/auth");

const router = express.Router();

// POST /api/seller/register
router.post("/register", isAuthUser, registerSeller);

module.exports = router;
