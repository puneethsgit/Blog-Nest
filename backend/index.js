const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const cookieParser = require(`cookie-parser`);
const authRoute = require(`./routes/auth.js`);
const userRoute = require(`./routes/users.js`);
const postRoute = require(`./routes/posts.js`);
const commentRoute = require(`./routes/comments.js`);
const multer = require("multer");
const { storage } = require("./cloudconfig.js");
const Post = require("./models/Post"); // Adjust the path as necessary

//middlewares
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

//routes middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

//database
main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongoUrl);
}

//routes
app.get("/home", (req, res) => {
  res.send("welcome");
});

app.listen(process.env.port, () => {
  console.log("Server is running at port number" + process.env.port);
});
