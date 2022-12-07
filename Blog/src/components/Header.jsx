import React from 'react'
import classes from './Header.module.css'
import background from '../assets/books.jpg'
import statue from '../assets/statue.png'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import { useState,useEffect } from 'react'

const Header = () => {
 const [scroll, setScroll] = useState(0)
  
  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    
    <>
      <div className={classes.left}><img src={background} alt="" /><h1>THE STORY</h1></div>

        <div className={classes.book1}><img style={{top:250 - `${scroll*0.35}` }} src={book1} alt="book1" /></div>
        <div className={classes.book2}><img style={{top:850 - `${scroll*0.35}` }} src={book2} alt="book2" /></div>
        <div className={classes.book3}><img style={{top:1100 - `${scroll*0.35}` }} src={book3} alt="book3" /></div>

      <div className={classes.statue}><img src={statue} alt="" /></div>

        <div className={classes.book4}><img style={{top:250 - `${scroll*0.35}` }} src={book1} alt="book4" /></div>
        <div className={classes.book5}><img style={{top:850 - `${scroll*0.35}` }} src={book2} alt="book5" /></div>
      <div className={classes.book6}><img
       style={{top:1100 - `${scroll*0.35}` }} src={book3} alt="book6" /></div>


      <div className={classes.right}><img src={background} alt="" /><h1>ABOUT ME</h1></div>
    </>
  )
}

export default Header