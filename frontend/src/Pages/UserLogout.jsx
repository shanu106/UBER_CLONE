import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogout = () => {

    const token = localStorage.getItem('token')
   try{
    const navigate = useNavigate()
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout/`,{
        headers:{
            Authorization: `bearer ${token}`
        }
    }).then((res)=>{
        console.log(res);
        localStorage.removeItem('token')
        navigate('/user-login')
        
    })
   }
    catch(err){
        console.log(err )
}
  return (
    <div>{token}</div>
  )
}

export default UserLogout