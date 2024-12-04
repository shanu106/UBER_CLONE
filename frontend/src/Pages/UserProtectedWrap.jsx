import React, { useContext,useEffect } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'



const UserProtectedWrap = ({
    children
}) => {
    const token = localStorage.getItem('token');
    const {user } = useContext(userDataContext);
    const navigate = useNavigate();

 useEffect(()=>{
    if(!token || token==null){
       navigate('/user-login');
    }
 },[token]);
  return (
   <>
   {children}
   </>
  )
}

export default UserProtectedWrap