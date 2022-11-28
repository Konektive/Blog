import React from 'react'
import {NavLink } from 'react-router-dom'
import App from '../App'
import About from './About'
import Contact from './Contact'

 const Nav = () => {
    return (
      <>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
             <ul>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
            </>
  )
}

export default Nav;