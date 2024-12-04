<<<<<<< HEAD

import React, { createContext, useContext, useState } from 'react'
=======
import React, { createContext, useState } from 'react'

>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
<<<<<<< HEAD
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
=======
    const [captain, setcaptain] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)
    const updateCaptain = (captainData)=>{
        setcaptain(captainData)
    }
    const value = {
        captain,
         setcaptain,
isLoading,
 setisLoading,
error, 
seterror,
updateCaptain
    }
  return (
    <div>
       <CaptainDataContext.Provider value={value}>
        {children}
        </CaptainDataContext.Provider> 
    </div>
>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)
  )
}

export default CaptainContext