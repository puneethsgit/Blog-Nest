const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // Use hash function directly
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found!");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json("Wrong credentials!");
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      process.env.SECRET,
      { expiresIn: "3d" }
    );

    const { password: userPassword, ...info } = user._doc;
    // Return token and user info in the response body
    res.status(200).json({ ...info, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  try {
    // Simply sending a response to clear the local storage token on the client side
    res.status(200).send("User logged out successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// REFETCH USER
router.get("/refetch", (req, res) => {
  const token =
    req.headers["authorization"]?.split(" ")[1] || req.cookies.token;
  if (!token) {
    return res.status(401).json("No token provided!");
  }

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }
    res.status(200).json(data);
  });
});

module.exports = router;
