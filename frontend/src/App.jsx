import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import UserSignUp from './Pages/UserSignUp'
import UserLogin from './Pages/UserLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import Home from "./Pages/Home"
import UserProtectWrapper from './Pages/UserProtectWrapper'
import UserLogout from './Pages/UserLogout'
const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path='/user-signup' element={<UserSignUp />} />
        <Route path='/user-login' element={< UserLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route  path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>
     
       
      
       

      </Routes>
  
  )
}

export default App