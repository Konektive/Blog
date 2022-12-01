import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

 const Nav = () => {
    return (
      <>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to='/add'>Add Post</NavLink></li>
            </ul>
             <ul>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
             <ul>
                <li><NavLink to='/delete'>Delete Posts</NavLink></li>
            </ul>
        </nav>
            </>
  )
}

export default Nav;