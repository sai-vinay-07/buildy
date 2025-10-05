import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContent'

const Header = () => {
    
    const {setInput, input} = useAppContext()

    const inputRef = useRef()

    const onSubmitHandler = async (e)=>{
      e.preventDefault();
      setInput(inputRef.current.value)
    }


  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='flex flex-col items-center text-center mt-20 mb-8'>
        <h1 className='text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-3xl text-slate-800'>
          Find Your <span className='text-blue-700'>Project Idea</span> Today.
        </h1>
        <p className='my-6 sm:my-8 max-w-3xl m-auto max-sm:text-xs'>
          Explore a complete hub of project ideas — from beginner to advanced — covering all
          technologies including Frontend, Backend, Full-Stack, Data Science,
          Cloud, and more. Gain hands-on experience and build a portfolio that stands out.
        </p>

        {/* Search bar with increased width */}
        <form onSubmit={onSubmitHandler} className='flex justify-between w-full max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
          <input 
            type="text" 
            ref={inputRef}
            className='w-full pl-4 outline-none text-gray-500 placeholder-gray-500 text-sm' 
            placeholder='Search for projects' 
            required 
          />
          <button 
            type='submit' 
            className='bg-blue-700 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'
          >
            Search
          </button>
        </form>
      </div>

      <img src={assets.gradientBackground} alt="bg" className='absolute -top-50 -z-1' />
    </div>
  )
}

export default Header
