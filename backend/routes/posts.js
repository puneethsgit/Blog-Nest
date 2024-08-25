const express = require("express");
const {
  getPost,
  getUser,
  getUserPost,
  getUserPostByID,
  updatePost,
  deletePost,
  creatPost,
} = require("../controller/Post");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../verifyToken");

//Create
router.post("/create", verifyToken, creatPost);

//Update
router.put("/:id", verifyToken, updatePost);

//delete
router.delete("/:id", verifyToken, deletePost);

//get post by id
router.get("/:id", getUserPostByID);

//get all post
router.get("/", getPost);

//get user posts
router.get("/user/:userId", getUserPost);

module.exports = router;
