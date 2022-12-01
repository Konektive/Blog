import React from 'react'
import classes from './Header.module.css'
import image from '../assets/skate.jpg'

const Header = () => {
  return (
    <header className={classes.header}><img src={image} alt="" /></header>
  )
}

export default Header