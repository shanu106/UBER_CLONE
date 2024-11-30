import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setuserData] = useState({})
    const submitHandler = (e) =>{
      e.preventDefault();
      setuserData({
        fullname:fullname,
        email:email,
        password:password
      })
      setfullname('');
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
          <h3 className='text-xl mb-2'>Full name</h3>
          <input value={fullname} onChange={(e)=>{
            setfullname(e.target.value)
          }} className='bg-[#eeeeee] border-2 text-lg placeholder:text-sm outline-none mb-2  rounded-xl px-2 py-2 w-full' required type="text" name="name" placeholder="Enter Your name" />
          <h3 className='text-xl mb-2'>Email</h3>
          <input value={email} onChange={(e)=>{
            setemail(e.target.value)
          }} className='bg-[#eeeeee] border-2 text-lg placeholder:text-sm outline-none  rounded-xl px-2 py-2 w-full' required type="email" name="email" placeholder="example@email.com" />
          <h3 className='text-xl mb-2 mt-6'>Password</h3>
          <input value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }} className='bg-[#eeeeee] rounded-xl px-2 py-2 w-full border-2 outline-none placeholder:text-sm text-lg ' required  type="password" name="password" placeholder='Password' id="" />
          <button className='bg-[#111] text-white rounded-xl px-2 py-2 w-full  outline-none mt-8 placeholder:text-sm text-lg '>Create New Account</button>
        </form>
       </div>
       <div className='px-2  h-72
       '>
        <p className='text-lg mt-4 w-full text-center'>Already have an account ? <Link className='text-sm text-blue-600' to='/user-login'>Log in here</Link></p>
        <p className='text-xs mt-44'>By prodeeding, you consent to get calls, WhatApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        {/* <Link className='bg-green-500 mt-44 flex justify-center items-center text-white rounded-xl px-2 py-2 w-full  outline-none mt-8 placeholder:text-sm text-lg ' to='/captain-login' >Sign Up as Captain</Link> */}
       </div>
      </div>
    )
 
}

export default UserSignUp