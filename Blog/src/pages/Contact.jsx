import React from 'react'
import { useState } from 'react';
import classes from './Contact.module.css'
import axios from 'axios'
import FormMessage from '../components/FormMessage';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:4000/contact', {
      name,
      email,
      message
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
    setName('')
    setEmail('')
    setMessage('')
    
    setTimeout(() => {
      setIsSubmitted(true);
    }, 200);
  };

if (isSubmitted) {
    return (
      <>
        <div className={classes.sentMessage}>
        <h2>Message Sent!</h2>
        <span>We'll get back to you soon.</span>
        </div>
        <FormMessage/>
      </>
    )
  }
  else if (!isSubmitted) {
  return (
        <>
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
          <div>
            <label>Name:</label>
        <input value={name} type="text" onChange={(e) => {
          setName(e.target.value)
        }} required />
      </div>
          <div>
            <label>E-mail:</label>
        <input value={email} type="email"  onChange={(e) => {
          setEmail(e.target.value)
        }} required />
      </div>
          <div>
            <label>Message:</label>
        <textarea value={message} onChange={(e) => {
          setMessage(e.target.value)
        }} required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
        </form>
      <FormMessage />
      </>

  );
  }


};

export default Contact