import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const homeNavigate = ()=>{
    navigate('/')
  }

  const adminLogin = ()=>{
    navigate('/login')
  }

  return (
    <div className='relative h-[110px] flex items-center justify-between px-6  md:px-16 lg:px-24 xl:px-32 py-6 '>
      <img src={assets.logo}  onClick={homeNavigate} alt="logo" className='h-50 w-50 cursor-pointer ' />
      <button onClick={adminLogin} className='flex items-center  gap-2 text-base justify-center cursor-pointer px-5 py-2.5 bg-blue-700 hover:bg-indigo-600 transition text-white rounded-full'>
        Admin login
        <img src={assets.arrow} className='w-3' alt="" />
      </button>
    </div>
  )
}

export default Navbar
