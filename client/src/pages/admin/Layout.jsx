import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between px-4 py-4 h-[70px] sm:px-12 border-b border-gray-200'>
        <img
          src={assets.logo}
          className='w-32 sm:w-40 cursor-pointer'
          onClick={() => navigate('/')}
          alt="Logo"
        />
        <button
          onClick={handleLogout}
          className='text-sm px-8 py-2 bg-blue-700 text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar />
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
