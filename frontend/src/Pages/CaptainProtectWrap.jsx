import React, { useContext,useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainProtectWrap = ({
    children
}) => {
    const token = localStorage.getItem('token');
    const {user } = useContext(CaptainDataContext);
    const navigate = useNavigate();

 useEffect(()=>{
    if(!token || token==null){
       navigate('/captain-login');
    }
 },[token]);
  return (
   <>
   {children}
   </>
  )
}

export default CaptainProtectWrap