const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// ------------------------------
// AUTHENTICATE USER FROM COOKIE
// ------------------------------
exports.isAuthUser = async (req, res, next) => {
  try {
    // Correct cookie name
    const token = req.cookies.authToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You must be logged in!",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not found!",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// ------------------------------
// ROLE BASED ACCESS CONTROL
// ------------------------------
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role: ${req.user.role} is not allowed to access this resource`,
      });
    }
    next();
  };
};
