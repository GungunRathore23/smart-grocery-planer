// const crypto = require("crypto");
// const redisClient = require("../config/redis");
// const sendEmail = require("../utils/sendEmail");

// const generateOTP = () => {
//   // 6 digit numeric OTP
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

// exports.sendOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) return res.status(400).json({ message: "Email required" });

//     const otp = generateOTP();
//     const key = `otp:${email}`;

//     // store OTP in redis with expiry 5 minutes (300 seconds)
//     await redisClient.setEx(key, 300, otp);

//     // send email
//     const html = `<p>Your verification OTP is <b>${otp}</b>. It will expire in 5 minutes.</p>`;
//     await sendEmail(email, "Your OTP for Smarter Grocery Planner", html);

//     res.json({ success: true, message: "OTP sent to email" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send OTP" });
//   }
// };

// exports.verifyOtp = async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     if (!email || !otp)
//       return res.status(400).json({ message: "Email and OTP required" });

//     const key = `otp:${email}`;
//     const saved = await redisClient.get(key);

//     if (!saved) return res.status(400).json({ message: "OTP expired or not found" });
//     if (saved !== otp) return res.status(400).json({ message: "Invalid OTP" });

//     // OTP valid: delete it so it can't be reused
//     await redisClient.del(key);

//     res.json({ success: true, message: "OTP verified" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "OTP verification failed" });
//   }
// };

const crypto = require("crypto");
const redisClient = require("../config/redis");
const sendEmail = require("../utils/sendEmail");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    const otp = generateOTP();
    const key = `otp:${email}`;

    // Redis V4 correct syntax
    await redisClient.set(key, otp, { EX: 300 });

    const html = `<p>Your verification OTP is <b>${otp}</b>. It expires in 5 minutes.</p>`;
    await sendEmail(email, "Your OTP for Seller Registration", html);

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP ERROR:", error);
    res.status(500).json({ message: "Failed to send OTP", error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      return res.status(400).json({ message: "Email & OTP required" });

    const key = `otp:${email}`;
    const saved = await redisClient.get(key);

    if (!saved) return res.status(400).json({ message: "OTP expired" });
    if (saved !== otp) return res.status(400).json({ message: "Invalid OTP" });

    await redisClient.del(key);

    res.json({ success: true, message: "OTP verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "OTP verification failed" });
  }
};
