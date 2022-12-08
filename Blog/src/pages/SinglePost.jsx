import React ,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {
 const [singlePost, setSinglePost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4000/posts/${id}`,
    }).then((res) => {
      setSinglePost(res.data);
    });
  }, []);


  return (
    <>
        <h1>{singlePost.title}</h1>
        <span>{singlePost.text}</span>

    </>
  )
}

export default SinglePost