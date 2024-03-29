const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//import Routes

const blogRouter = require("./routes/posts");
app.use("/", blogRouter);

//connecting to database

mongoose.connect(process.env.POSTS_DATABASE_URL, () => {
  console.log("Posts database connected");
});

//listen to server
app.listen(4000, () => {
  console.log("Server Started on port 4000");
});
