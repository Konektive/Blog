import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { authActions } from '../../store';

const LogInButton = () => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
      dispatch(authActions.login())
    }
    return (
     <button onClick={handleLogout}><BsFillPersonFill></BsFillPersonFill></button>
    )

}

export default LogInButton;