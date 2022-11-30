import React from 'react'
import Posts from './Posts'
import classes from './Home.module.css'

const Home = () => {
    return (
      <div className={classes.card}>
        <Posts />
      </div>
  )
}

export default Home