import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import classes from './PostDelete.module.css'

const PostDelete = () => {
  const [postsToDelete, setPostsToDelete] = useState([]);
  const [isDeleting, setIsDeteting] = useState(false)

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/posts",
    }).then((res) => {
      setPostsToDelete(res.data);
    });
  }, [postsToDelete.length]);
    

    return postsToDelete.map(post => {
        return (
          <div className={classes.toDelete} onClick={() => {
                setIsDeteting(true)
            axios.delete(`http://localhost:4000/posts/${post._id}`).then(res => {
              setIsDeteting(false)
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }} key={post._id}>
                <h1 >{isDeleting ? 'Deleting' : post.title}</h1>
                </div>
        )
    })

}

export default PostDelete