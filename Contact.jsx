import React from 'react'
import { useState } from 'react';
import classes from './Contact.module.css'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
    }, 300);
  };

  // if (submitted) {
  //   return (
  //     <>
  //       <h2>Thank you!</h2>
  //       <div>We'll be in touch soon.</div>
  //     </>
  //   );
  // }

  return (<form
      className={classes.form}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input value={name} type="text" placeholder="Your name" onChange={(e) => {
          setName(e.target.value)
        }} required />
      </div>
      <div>
        <input value={email} type="email" placeholder="Email" onChange={(e) => {
          setEmail(e.target.value)
        }} required />
      </div>
      <div>
        <textarea value={message} placeholder="Your message" onChange={(e) => {
          setMessage(e.target.value)
        }} required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default Contact