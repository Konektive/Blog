import React from 'react'
import classes from './Header.module.css'
import statue from '../assets/statue.png'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import { useState,useEffect, } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const windowHeight = document.documentElement.clientHeight * 0.65 / 100;
  const bookscroll1 = `calc(30vh - (${scroll*0.008*windowHeight}vh))`
  const bookscroll2 = `calc(60vh - (${scroll*0.008*windowHeight}vh))`
  const bookscroll3 = `calc(80vh - (${scroll*0.008*windowHeight}vh))`
  const bookscroll4 = `calc(25vh - (${scroll*0.008*windowHeight}vh))`
  const bookscroll5 = `calc(60vh - (${scroll*0.008*windowHeight}vh))`
  const bookscroll6 = `calc(90vh - (${scroll * 0.008 * windowHeight}vh))`
  const statueScroll = `calc(-10vh + (${scroll * 0.008 * windowHeight}vh))`
  
   const scrollDown = ()=>{window.scrollBy(0 , window.innerHeight)} 
  
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
      <div className={classes.left}><h1>THE STORY</h1></div>

        <div className={classes.book1}><img style={{top:bookscroll1 }} src={book1} alt="book1" /></div>
        <div className={classes.book2}><img style={{top:bookscroll2 }} src={book2} alt="book2" /></div>
        <div className={classes.book3}><img style={{top:bookscroll3 }} src={book3} alt="book3" /></div>

      <div className={classes.statue}><img style={{bottom:statueScroll }} src={statue} alt="" /></div>

        <div className={classes.book4}><img style={{top:bookscroll4 }} src={book1} alt="book4" /></div>
        <div className={classes.book5}><img style={{top:bookscroll6 }} src={book2} alt="book5" /></div>
      <div className={classes.book6}><img
       style={{top:bookscroll5 }} src={book3} alt="book6" /></div>


      <div className={classes.right}><h1>ABOUT ME</h1></div>
      <button onClick={scrollDown} className={classes.button}>Show more...</button>
    </>
  )
}

export default Header