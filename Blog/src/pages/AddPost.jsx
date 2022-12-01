import React from 'react'
import classes from './AddPost.module.css' 
import axios from 'axios'
import { useState } from 'react'
  
const About = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const send = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/add', {
      title,
      text
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
    setTitle('')
    setText('')
  }
  return (
    <div className={classes.newPost}>
      <label><h1>Post Title</h1><label/>
        <input placeholder='Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
      </label>
      <label>
        <textarea placeholder='Text' value={text} onChange={(e)=>{setText(e.target.value)}} type="text" />
      </label>
      <button className={classes.button} onClick={send}>Add new post </button>
      </div>
  )
}

export default About