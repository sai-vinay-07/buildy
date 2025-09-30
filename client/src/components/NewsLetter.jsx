import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Stay Ahead with Fresh Project Ideas</h1>
      <p className='w-[40vw] md:text-lg text-gray-500/70 pb-8'>Get weekly updates with curated project ideas, learning tips, and exclusive resources to help you level up your skills.No spam , only value. </p>
        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-1/2' >
            <input className='border border-gray-300  rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id' required />
            <button type='submit' className='md:px-12 px-8 h-full text-white bg-blue-400 hover:bg-blue-700 transition-all cursor-pointer rounded-md rounded-l-none '>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter
