const express = require("express");
const {
  getPostComment,
  createComment,
  updatedComment,
  deleteComment,
} = require("../controller/Comments");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../verifyToken");

//CREATE
router.post("/create", verifyToken, createComment);

//UPDATE
router.put("/:id", verifyToken, updatedComment);

//DELETE
router.delete("/:id", verifyToken, deleteComment);

//GET POST COMMENTS
router.get("/post/:postId", getPostComment);

module.exports = router;
