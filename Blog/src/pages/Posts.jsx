import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import image from '../assets/landscape-1.jpg'
import classes from './Posts.module.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/posts",
    }).then((res) => {
      setPosts(res.data);
    });
  }, [posts.length]);

 
  return  posts.map((post) => {
    const item = new Date(post.date)
    const year = item.getFullYear()
    const month = item.getMonth()
    const day = item.getDay()
      return (
      <div  key={post._id} className={classes.wrapper} >
        <div className={classes.img}>
          <img src={image} alt="Landscape" />
        </div>
        <NavLink to={`/${post._id}`}>
            <div className={classes.info}>
            <h1>{post.title}</h1>
            <h2>{`${year}:${month}:${day}`}</h2>
          <span>{post.text}</span>
            <br />
            {/* Decide if u want to have a read more span or full post to be a link to it  */}
            {/* <span><NavLink to={`/${post._id}`}>Read more...</NavLink></span>   */}
        </div>
        </NavLink>
        </div>
    )
  })
  
};

export default Posts;
