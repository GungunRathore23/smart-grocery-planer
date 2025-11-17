require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db"); // DB connection import
const errorHandler = require("./src/middleware/errorHandler"); // Error handler import
const isAuthUser = require("./src/middleware/authMiddleware"); // ✅ Import auth middleware
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

//Middleware Test (optional)
//Agar tum test karna chahti ho middleware ko globally, ye temporary code hai
//app.use(isAuthUser); // (Uncomment only for testing globally)

// Routes import
const productRoutes = require("./src/routers/productRoutes");
const contactUsRoutes = require("./src/routers/contactUs");
const userRouter = require("./src/routers/userRouter");

// ✅ Routes use
app.use("/api/products", productRoutes); // Product-related routes
app.use("/api/contact", contactUsRoutes); // Contact-related routes
app.use("/api/userAuth", userRouter); // User-related routes

// Basic Test Routes
app.get("/", (req, res) => {
  res.send("Hello Gungun! Express is running ");
});

app.get("/home", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Home route is running successfully ",
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "About route is running successfully ",
  });
});

app.get("/contactus", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "ContactUs route is running successfully ",
  });
});

// Error Handler Middleware (should always come last)
app.use(errorHandler);

// 404 Middleware (for invalid paths)
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: "not-found",
    message: "Route not found on Postman or server ",
  });
});

// Start Server
const PORT = process.env.PORT || 5555;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();