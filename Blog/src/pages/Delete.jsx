import React from 'react'
import classes from './Delete.module.css'
import PostDelete from '../components/PostDelete';


const Delete = () => {
    return (
             <div className={classes.wrapDelete}>
            <PostDelete/>
            </div>
)

}

export default Delete;