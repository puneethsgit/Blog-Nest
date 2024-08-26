const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

dotenv.config();
//database
main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongoUrl);
}

//middlewares

app.use(express.json());
const url = process.env.FRONTEND_URL;
app.use(cors({ origin: url, credentials: true }));
app.use(cookieParser());

//routes middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

//routes
app.get("/home", (req, res) => {
  res.send("hello");
});

app.listen(process.env.port, () => {
  console.log("Server is running at port number" + process.env.port);
});
