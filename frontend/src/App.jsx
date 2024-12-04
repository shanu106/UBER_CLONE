import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignUp from './Pages/UserSignUp'
import UserLogin from './Pages/UserLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import Start from './Pages/Start'
import UserProtectedWrap from './Pages/UserProtectedWrap'
import CaptainProtectedWrap from './Pages/CaptainProtectWrap'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
const App = () => {
  return (

     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/user-signup' element={<UserSignUp />} />
       <Route path='/user-login' element={< UserLogin/>} />
       <Route path='/captain-signup' element={<CaptainSignUp />} />
       <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/start' element={
        <UserProtectedWrap>
          <Start />
        </UserProtectedWrap>
      } />
    <Route  path='/userLogout' element={
      <UserProtectedWrap>
        <UserLogout />
      </UserProtectedWrap>
    }/>
    <Route path='/captain-Home' element={
      <CaptainProtectedWrap>
        <CaptainHome/>
      </CaptainProtectedWrap>
    }/>
    </Routes>
  
  )
}

export default App