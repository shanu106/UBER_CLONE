
import React, { createContext, useContext, useState } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
    const [Captain, setCaptain] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null)
    const updateCaptain =(captainData)=>{
        setCaptain(captainData);
    }
    const value = {
        Captain,
        setCaptain,
        isLoading,
        setisLoading,
        error,
        seterror,
        updateCaptain
    }
  return (
   <CaptainDataContext.Provider value={value}>
    {children}
   </CaptainDataContext.Provider>
  )
}

export default CaptainContext