import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import { useSelector } from "react-redux";
import LoginButton from './buttons/LoginButton'
import LogOutButton from './buttons/LogOutButton'



const Nav = () => {

const isLoggedIn = useSelector(state=> state.isLoggedIn)
    
    return (
      <>
            <nav className={classes.nav}>
                <div className={classes.left}>
            <ul>
                <li className={classes.white}><NavLink  to='/'>Home</NavLink></li>
            </ul>
             <ul>
                <li className={classes.white}><NavLink  to='/contact'>Contact</NavLink></li>
            </ul>
                </div>

                <div className={classes.right}>
            <ul>
                <li><NavLink to='/add'>Add Post</NavLink></li>
            </ul>
             <ul>
                <li><NavLink to='/delete'>Delete Posts</NavLink></li>
            </ul>
            <ul>{!isLoggedIn ? <LoginButton/> : <LogOutButton/> }</ul>
                </div>
            
        </nav>
            </>
  )
}

export default Nav;