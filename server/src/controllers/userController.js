const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

/* -------------------------------------------------------
   JWT TOKEN CREATOR
-------------------------------------------------------- */
const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/* -------------------------------------------------------
   SEND TOKEN IN COOKIE
-------------------------------------------------------- */
const sendToken = (user, res, message) => {
  const token = createToken(user._id);

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: false,     // set to true only when using HTTPS
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 Days
  });

  user.password = undefined;

  return res.status(200).json({
    success: true,
    message,
    user,
  });
};

/* -------------------------------------------------------
   REGISTER USER  (NO DOB, NO AGE)
-------------------------------------------------------- */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
      isVerified: false,
    });

    // Backend verify URL (for Postman & testing)
    const verifyUrl = `${process.env.BACKEND_URL}/api/user/verify-email/${user._id}`;

    console.log("Email Verify URL:", verifyUrl);

    return res.status(201).json({
      success: true,
      message: "Registered successfully. Please verify your email.",
      verifyUrl: verifyUrl,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* -------------------------------------------------------
   VERIFY EMAIL (NO TOKEN)
-------------------------------------------------------- */
exports.verifyEmail = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Invalid verification link" });
    }

    // FIXED FIELD
    user.isVerified = true;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



/* -------------------------------------------------------
   LOGIN USER
-------------------------------------------------------- */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email & Password required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    if (!user.isVerified)
      return res
        .status(403)
        .json({ message: "Please verify your email first" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    return sendToken(user, res, "Login successful");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -------------------------------------------------------
   GET MY PROFILE
-------------------------------------------------------- */
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -------------------------------------------------------
   UPDATE USER (NAME, PHONE ONLY)
-------------------------------------------------------- */
exports.updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const updates = {
      name: req.body.name,
      phone: req.body.phone,
    };

    const user = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({
      success: true,
      message: "User updated",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -------------------------------------------------------
   UPDATE PASSWORD
-------------------------------------------------------- */
exports.updatePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    const user = await User.findById(req.params.id).select("+password");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    user.password = newPassword;
    await user.save();

    return res.status(200).json({ success: true, message: "Password updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -------------------------------------------------------
   DELETE USER
-------------------------------------------------------- */
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -------------------------------------------------------
   LOGOUT USER
-------------------------------------------------------- */
exports.logoutUser = (req, res) => {
  res.clearCookie("authToken");
  return res.status(200).json({ success: true, message: "Logged out" });
};
