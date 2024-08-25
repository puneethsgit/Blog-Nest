const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const verifyToken = require("../verifyToken.js");

//middlewares
dotenv.config();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("User Not Found!");
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("Wrong Credentials");
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      process.env.SECRET,
      {
        expiresIn: "3d",
      }
    );

    const { password, ...info } = user._doc;
    res.cookie("token", token, { httpOnly: true }).status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("token", { samesite: "none", secure: true })
      .status(200)
      .send("User logged out successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//REFECTCH User
// router.get("/refetch",(req,res)=>{
//   const token = req.cookies.token
//   jwt.verify(token,process.env.SECRET,async(err,data)=>{
//     if(err){
//       return res.status(404).json(err)
//     }
//     res.status(200).json(data) //before here what was there
//   })
// })
router.get("/refetch", verifyToken, (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("You are not authenticated");
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      return res.status(403).json("Token is not valid");
    }
    req.userId = data._id;
    //console.log("token working");
    res.cookie("token", token, { httpOnly: true }).status(200).json(data);
  });
});

module.exports = router;

