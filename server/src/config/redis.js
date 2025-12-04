const { createClient } = require("redis");
require("dotenv").config();

const redisURL = process.env.REDIS_URL;

if (!redisURL) {
  console.error("❌ Missing REDIS_URL in .env");
  process.exit(1);
}

const redisClient = createClient({
  url: redisURL,
  socket: {
    tls: true,
    rejectUnauthorized: false,
  },
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis connected successfully"));

module.exports = redisClient;
