const express = require("express");
const router = express.Router();
const Post = require("../models/postsModel");
const Message = require("../models/messageModel");

//Getting all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    console.log(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//Getting One
router.get("/posts/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//Creating One
router.post("/add", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    date: req.body.date,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Deleting One
router.delete("/posts/:postId", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//Sending message

router.post("/contact", async (req, res) => {
  const message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const savedMessage = await message.save();
    res.json(savedMessage);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
