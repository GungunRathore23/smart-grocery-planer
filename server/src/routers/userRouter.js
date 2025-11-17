const express = require("express");
const router = express.Router();

// Middleware
const { isAuthUser, authorizeRoles } = require("../middleware/authMiddleware");

// Controllers
const {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  getMyProfile,
  updateUserInfo,
  updatePassword,
  deleteUser,
} = require("../controllers/userController");

/* ---------------------------------------------------------
   PUBLIC ROUTES
---------------------------------------------------------- */

// Register user
router.post("/register", registerUser);

// Email verification (no token, only userId)
router.get("/verify-email/:id", verifyEmail);

// Login
router.post("/login", loginUser);

/* ---------------------------------------------------------
   PROTECTED ROUTES (User must be logged in)
---------------------------------------------------------- */

// Get own profile
router.get("/me", isAuthUser, getMyProfile);

// Logout
router.post("/logout", isAuthUser, logoutUser);

// Update user info (name, phone)
router.put("/update/:id", isAuthUser, updateUserInfo);

// Update password
router.put("/password/:id", isAuthUser, updatePassword);

// Delete user
router.delete("/delete/:id", isAuthUser, deleteUser);


/* ---------------------------------------------------------
   ADMIN ROUTES (optional, if needed)
   Uncomment only if you want admin panel
---------------------------------------------------------- */
// router.get("/all", isAuthUser, authorizeRoles("admin"), getAllUsers);


module.exports = router;
