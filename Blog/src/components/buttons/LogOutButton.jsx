import React from 'react'
import {BiLogOutCircle} from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { authActions } from '../../store'

const LogOutButton = () => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
      dispatch(authActions.logout())
    }
    return (
     <button onClick={handleLogout}><BiLogOutCircle></BiLogOutCircle></button>
    )

}

export default LogOutButton;