import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/posts",
    }).then((res) => {
      setPosts(res.data);
      console.log(
        posts.map((post) => {
          return post.title;
        })
      );
    });
  }, []);

  return posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <div>{post.text}</div>
      </div>
    );
  });
};

export default Posts;
