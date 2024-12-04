import React, { createContext, useState } from 'react'

<<<<<<< HEAD
export const userDataContext = createContext()

const UserContext = ({children}) => {

    const [User, setUser] = useState({
        email:'',
        fullname:'',
        password:'',

    })
  return (
    <div>
        <userDataContext.Provider value={{User,setUser}}>
            
        {children}
        </userDataContext.Provider>
    </div>
=======

export const userDataContext =  createContext()

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({
        email:'ss',
        fullname:'ss',
        password:'ss'
    })
  
  return (
  <userDataContext.Provider value={{user, setUser}}>{children}</userDataContext.Provider>
>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)
  )
}

export default UserContext