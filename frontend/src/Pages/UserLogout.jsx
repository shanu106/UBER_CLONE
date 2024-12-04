import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { response } from 'express'

const UserLogout =async () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

            
 try {
         const response =await axios.get( `${import.meta.env.VITE_BASE_URL}/user/logout`,{
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }).then((response)=>{
 
  console.log(response)
    if(response.status===200){
        localStorage.removeItem('token');
        navigate('/user-login');
        console.log("done")
    }
});
 } catch (error) {
  console.log(error)
 }

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout