import React from 'react'
import Posts from '../components/Posts'
import classes from './Home.module.css'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <div className={classes.card}>
        <Posts />
      </div>
      </>
  )
}

export default Home