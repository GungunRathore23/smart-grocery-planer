const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};

// store refresh token in redis with expiry (seconds)
const storeRefreshToken = async (token, userId) => {
  // store key -> value
  // setEx: key, ttlSeconds, value
  const key = `refreshToken:${token}`;
  await redisClient.setEx(key, 7 * 24 * 60 * 60, userId.toString());
};

const verifyRefreshTokenInRedis = async (token) => {
  const key = `refreshToken:${token}`;
  const userId = await redisClient.get(key);
  return userId;
};

const removeRefreshTokenFromRedis = async (token) => {
  const key = `refreshToken:${token}`;
  await redisClient.del(key);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  storeRefreshToken,
  verifyRefreshTokenInRedis,
  removeRefreshTokenFromRedis,
};
