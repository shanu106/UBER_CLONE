import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
<<<<<<< HEAD
import CaptainContext from './context/CaptainContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>

    <UserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext>
    </CaptainContext>
      
  </StrictMode>,
=======
createRoot(document.getElementById('root')).render(

<UserContext>

    <BrowserRouter>
    <App />
    </BrowserRouter>
</UserContext>
 
>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)
)
