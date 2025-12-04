// const express = require("express");
// const router = express.Router();

// const { sendOtp, verifyOtp } = require("../controllers/otpController");
// const Seller = require("../models/sellerModel");

// // 1️⃣ Send OTP
// router.post("/send-otp", sendOtp);

// // 2️⃣ Verify OTP
// router.post("/verify-otp", verifyOtp);

// // 3️⃣ Register Seller After OTP Verified
// router.post("/register", async (req, res) => {
//   try {
//     const { businessName, ownerName, password, email, phone, gst } = req.body;

//     if (!businessName || !ownerName || !password || !email)
//       return res.status(400).json({ success: false, message: "All required fields missing" });

//     const existing = await Seller.findOne({ email });
//     if (existing) return res.status(400).json({ success: false, message: "Email already registered" });

//     const seller = await Seller.create({
//       businessName,
//       ownerName,
//       password,
//       email,
//       phone,
//       gst,
//     });

//     res.json({ success: true, seller });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const { sendOtp, verifyOtp } = require("../controllers/otpController");
const { checkEmailExists, registerSeller } = require("../controllers/sellerController");

// 1) Check Email Exists Before OTP
// router.post("/check-email", checkEmailExists);

// 2) Send OTP
// router.post("/send-otp", sendOtp);

// 3) Verify OTP
// router.post("/verify-otp", verifyOtp);

// 4) Register Seller After OTP Verified
router.post("/register", registerSeller);

module.exports = router;
