import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link className='w-full bg-red-500 px-4 py-3 mx-8 mt-10' to='/user/logout'> Logout</Link>
    </div>
  )
}

export default Home