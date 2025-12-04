const User = require("../models/userModel");
const {
  generateAccessToken,
  generateRefreshToken,
  storeRefreshToken,
  verifyRefreshTokenInRedis,
  removeRefreshTokenFromRedis,
} = require("../utils/generateTokens"); 
const redisClient = require("../config/redis");
const mongoSanitize = require("mongo-sanitize");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

// helper to create 6 digit OTP
const createOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// ---------- REGISTER (create user + send verification OTP) ----------
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const cleanEmail = mongoSanitize(email.toLowerCase().trim());
    const existing = await User.findOne({ email: cleanEmail });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const otp = createOtp();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const user = new User({
      username,
      email: cleanEmail,
      password,
      isVerified: false,
      otpCode: otp,
      otpExpiresAt: otpExpiry,
    });

    await user.save();

    // send OTP email
    try {
      const html = `<p>Your Smarter Grocery Planner verification code is: <b>${otp}</b>. It expires in 10 minutes.</p>`;
      await sendEmail(user.email, "Verify your account — Smarter Grocery Planner", html);
    } catch (emailErr) {
      // don't reveal internals
      console.error("Email send error:", emailErr.message);
    }

    return res.status(201).json({
      success: true,
      message: "User registered. OTP sent to email. Verify to login.",
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  }
};

// ---------- VERIFY OTP (email verification) ----------
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

    const cleanEmail = mongoSanitize(email.toLowerCase().trim());
    const user = await User.findOne({ email: cleanEmail });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.isVerified) return res.status(400).json({ message: "User already verified" });

    if (!user.otpCode || user.otpCode !== otp) return res.status(400).json({ message: "Invalid OTP" });
    if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });

    user.isVerified = true;
    user.otpCode = null;
    user.otpExpiresAt = null;
    await user.save();

    return res.json({ success: true, message: "Email verified successfully. You can now login." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "OTP verification failed" });
  }
};

// ---------- LOGIN ----------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const cleanEmail = mongoSanitize((email || "").toLowerCase().trim());
    if (!cleanEmail || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email: cleanEmail });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await user.comparePassword(password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified) return res.status(403).json({ message: "Please verify your email before logging in" });

    const payload = { id: user._id.toString(), role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    // store refresh token in redis
    await storeRefreshToken(refreshToken, user._id);

    // set cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });


    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    }); 

    return res.json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
      user: { id: user._id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
};

// ---------- REFRESH ACCESS TOKEN ----------
exports.refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.body.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token provided" });

    // verify token structurally
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // verify token exists in redis
    const userId = await verifyRefreshTokenInRedis(token);
    if (!userId || userId !== payload.id) return res.status(401).json({ message: "Invalid session" });

    // create new access token (and optionally rotate refresh token)
    const newAccess = generateAccessToken({ id: payload.id, role: payload.role });
    // rotate refresh token for security (optional — implemented here)
    const newRefresh = generateRefreshToken({ id: payload.id, role: payload.role });
    await storeRefreshToken(newRefresh, payload.id);
    // remove old refresh token from redis
    await removeRefreshTokenFromRedis(token);

    // set new cookie
    res.cookie("refreshToken", newRefresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, accessToken: newAccess });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Could not refresh token" });
  }
};

// ---------- FORGOT PASSWORD (send reset OTP) ----------
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const cleanEmail = mongoSanitize((email || "").toLowerCase().trim());
    if (!cleanEmail) return res.status(400).json({ message: "Email required" });

    const user = await User.findOne({ email: cleanEmail });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = createOtp();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.resetOtpCode = otp;
    user.resetOtpExpiresAt = otpExpiry;
    await user.save();

    // send email
    try {
      const html = `<p>Your Smarter Grocery Planner password reset code is: <b>${otp}</b>. It expires in 10 minutes.</p>`;
      await sendEmail(user.email, "Password reset code — Smarter Grocery Planner", html);
    } catch (emailErr) {
      console.error("Email send error:", emailErr.message);
    }

    return res.json({ success: true, message: "Password reset OTP sent to email" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Forgot password failed" });
  }
};

// ---------- RESET PASSWORD ----------
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) return res.status(400).json({ message: "Email, OTP and new password required" });

    const cleanEmail = mongoSanitize((email || "").toLowerCase().trim());
    const user = await User.findOne({ email: cleanEmail });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.resetOtpCode || user.resetOtpCode !== otp) return res.status(400).json({ message: "Invalid reset OTP" });
    if (!user.resetOtpExpiresAt || user.resetOtpExpiresAt < new Date()) return res.status(400).json({ message: "Reset OTP expired" });

    user.password = newPassword; // will be hashed by pre-save
    user.resetOtpCode = null;
    user.resetOtpExpiresAt = null;
    await user.save();

    return res.json({ success: true, message: "Password reset successful. You can login now." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Reset password failed" });
  }
};

// ---------- LOGOUT ----------
exports.logout = async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req.body.refreshToken;
    if (token) {
      await removeRefreshTokenFromRedis(token);
    }

    res.clearCookie("refreshToken");
    return res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Logout failed" });
  }
};

// ---------- GET PROFILE ----------
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password -otpCode -resetOtpCode -otpExpiresAt -resetOtpExpiresAt");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch profile" });
  }
};
