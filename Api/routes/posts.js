const express = require("express");
const router = express.Router();
const Post = require("../models/postsModel");

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
router.post("/posts", async (req, res) => {
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

module.exports = router;
