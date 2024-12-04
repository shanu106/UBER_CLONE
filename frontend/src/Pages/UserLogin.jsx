<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {userDataContext} from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

=======
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext } from '../context/UserContext'
>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)
const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})
<<<<<<< HEAD
  const [user, setuser] = useState(userDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) =>{
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/loginUser`,userData);

    if(response.status == 201){
      const data = response.data;
      setuser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/start');
    }

  const {user, setUser} = useContext(userDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e) =>{
    e.preventDefault();
   
     const newUser = {
      email:email,
      password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/loginUser`,newUser)
    if(response.status==201){
      
      const data = response.data
     setUser(data.user)
      localStorage.setItem('token',data.token)
      
      navigate('/home');
    } else {
      console.log(error)
      navigate('/')
    }

>>>>>>> caba306 (user LOGIN SignUP Logout with frontEnd user Context)
    setemail('');
    setpassword('');
  }
  return (
    <div className='p-7'>
     <div className='h-full '>
     <img className='w-20 ml-5 mb-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form className='px-2' onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <h3 className='text-xl mb-2'>Email</h3>
        <input value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} className='bg-[#eeeeee] border-2 text-lg placeholder:text-sm outline-none  rounded-xl px-2 py-2 w-full' required type="email" name="email" placeholder="example@email.com" />
        <h3 className='text-xl mb-2 mt-6'>Password</h3>
        <input value={password} onChange={(e)=>{
          setpassword(e.target.value)
        }} className='bg-[#eeeeee] rounded-xl px-2 py-2 w-full border-2 outline-none placeholder:text-sm text-lg ' required  type="password" name="password" placeholder='Password' id="" />
        <button className='bg-[#111] text-white rounded-xl px-2 py-2 w-full  outline-none mt-8 placeholder:text-sm text-lg '>Login</button>
      </form>
     </div>
     <div className='px-2  h-72
     '>
      <p className='text-lg mt-4 w-full text-center'>New Here ? <Link className='text-sm text-blue-600' to='/user-signup'>Create new Account</Link></p>
      <Link className='bg-green-500 mt-72 flex justify-center items-center text-white rounded-xl px-2 py-2 w-full  outline-none  placeholder:text-sm text-lg ' to='/captain-login' >Sign in as Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin