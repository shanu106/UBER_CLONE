import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignUp from './Pages/UserSignUp'
import UserLogin from './Pages/UserLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import CaptainLogin from './Pages/CaptainLogin'
const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/user-signup' element={<UserSignUp />} />
        <Route path='/user-login' element={< UserLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
       

      </Routes>
  
  )
}

export default App