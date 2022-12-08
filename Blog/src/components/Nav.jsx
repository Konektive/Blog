import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import { useState } from 'react'

const Nav = () => {
    const [color, setColor] = useState('white')

    const handleBlackAll = () => {
        setColor('black')
    }
    const handleWhite = () => {
        setColor('white')
    }
    
    return (
      <>
            <nav className={classes.nav}>
                <div className={classes.left}>
            <ul>
                <li className={classes.white}><NavLink onClick={handleWhite} style={{color:color}} to='/'>Home</NavLink></li>
            </ul>
             <ul>
                <li className={classes.white}><NavLink onClick={handleBlackAll} style={{color:color}} to='/contact'>Contact</NavLink></li>
            </ul>
                </div>

                <div className={classes.right}>
            <ul>
                <li><NavLink onClick={handleBlackAll} to='/add'>Add Post</NavLink></li>
            </ul>
             <ul>
                <li><NavLink onClick={handleBlackAll} to='/delete'>Delete Posts</NavLink></li>
            </ul>
                </div>
        </nav>
            </>
  )
}

export default Nav;