import { useEffect, useState } from "react";
import axios from "axios";
// import classes from './Posts.modules.css'
import { NavLink, useParams } from "react-router-dom";

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
      <div className="wrapper" key={post._id}>
        <h1>{post.title}</h1>
        <div>{post.text}</div>
        <span><NavLink to={`/${post._id}`}>Read more...</NavLink></span>
      </div>
    );
  });
};

export default Posts;
