require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const redisClient = require("./src/config/redis");

// ROUTES
const userRouter = require("./src/routes/userRouter");
const sellerRouter = require("./src/routes/sellerRouter");  // ⭐ ADD THIS

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// MONGO CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.log("❌ Database connection error:", err));

// ROUTES
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);  

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// SERVER START
const PORT = process.env.PORT || 5555;

const startServer = async () => {
  try {
    // WAIT FOR REDIS CONNECTION
    await redisClient.connect();
    console.log("🚀 Redis Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

startServer();
