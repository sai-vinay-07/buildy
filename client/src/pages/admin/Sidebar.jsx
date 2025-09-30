import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="flex flex-col text-xl border-r border-gray-200 min-h-full pt-6">
      <NavLink end={true} to="/admin" className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${ isActive && 'bg-blue-700/20 border-r-4 border-blue-700 '}` }>
        <img src={assets.home_icon} className="w-5 h-5" alt="Home" />
        <p className="hidden  md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink end={true} to="/admin/add-project" className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${ isActive && 'bg-blue-700/20 border-r-4 border-blue-700 '}` }>
        <img src={assets.add_icon} className="w-5 h-5" alt="Home" />
        <p className="hidden  md:inline-block">Add Project</p>
      </NavLink>

      <NavLink end={true} to="/admin/list-project" className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${ isActive && 'bg-blue-700/20 border-r-4 border-blue-700 '}` }>
        <img src={assets.list_icon} className="w-5 h-5" alt="Home" />
        <p className="hidden  md:inline-block">Projects List</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
