const express = require("express");
const router = express.Router();
const { isAuthUser, authorizeRoles } = require("../middleware/authMiddleware");

const {
  register,
  verifyOtp,
  login,
  refreshToken,
  forgotPassword,
  resetPassword,
  logout,
  getProfile,
} = require("../controllers/userController");

// Public
router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/refresh", refreshToken); // to get new access token
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// Protected
router.get("/me", isAuthUser, getProfile);
router.post("/logout", isAuthUser, logout);

// Example protected admin-only route (usage)
// router.get("/admin-only", isAuthUser, authorizeRoles("admin"), adminHandler);

module.exports = router;
