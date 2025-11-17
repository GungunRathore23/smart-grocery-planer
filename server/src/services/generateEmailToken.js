
const jwt = require("jsonwebtoken");


exports.generateEmailVerificationToken = (user) => {
  const token = jwt.sign(
    { email: user.email, userId: user._id },
    process.env.EMAIL_VERIFY_SECRET,   
    { expiresIn: "15m" }             
  );

  user.emailVerificationToken = token;
  user.emailVerificationExpiry = Date.now() + 15 * 60 * 1000; // 15min

  return token;
};
