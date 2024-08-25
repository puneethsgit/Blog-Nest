const express = require("express");
const mongoose = require("mongoose"); // No need to destructure mongoose
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const { storage } = require("./cloudconfig"); // Adjust the path as necessary

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "DELETE"],
};
app.use(cors(corsOptions));

// Connect to the database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Route middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Simple route for testing
app.get("/home", (req, res) => {
  res.send("Hello, welcome to the home route!");
});

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Start the server
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});
