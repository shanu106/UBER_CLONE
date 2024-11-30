import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] w-full pt-5 flex justify-between flex-col bg-red-500'> 
        <img className='w-20 ml-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-4 pb-7 px-4 '>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/user-login' className='flex items-center justify-center w-full text-center py-3 bg-black text-white mt-2 rounded-xl'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home