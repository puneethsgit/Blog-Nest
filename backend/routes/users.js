const express = require("express");
const { getUser, updateUser, deleteUser } = require("../controller/User");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require(`../verifyToken`);

//Update
router.put("/:id", verifyToken, updateUser);

//delete
router.delete("/:id", verifyToken, deleteUser);

//get
router.get("/:id", getUser);

module.exports = router;
