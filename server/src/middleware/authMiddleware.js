// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// exports.isAuthUser = async (req, res, next) => {
//   try {
//     const token =
//       req.cookies.accessToken || // ← ACCESS TOKEN COOKIE
//       (req.headers.authorization?.startsWith("Bearer ")
//         ? req.headers.authorization.split(" ")[1]
//         : null);

//     if (!token) return res.status(401).json({ message: "Please login first" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(401).json({ message: "User not found" });

//     req.user = { id: user._id, role: user.role };
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };


const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthUser = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
