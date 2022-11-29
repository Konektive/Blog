import { useEffect, useState } from "react";
import axios from "axios";
import classes from './Posts.modules.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/posts",
    }).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return posts.map((post) => {
    return (
      <div onClick={() => {
        console.log(`Clicked ${post._id}`)
      }} className="wrapper" key={post._id}>
        <h1>{post.title}</h1>
        <div>{post.text}</div>
        <span>Read more...</span>
      </div>
    );
  });
};

export default Posts;