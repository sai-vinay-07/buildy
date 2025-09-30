import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
    }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-blue-700/30 shadow-xl shadow-blue-700/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
             <div className='w-full py-6 text-center'>
                <h1 className='text-3xl font-bold'><span className='text-blue-700'>Admin</span> Login</h1>
                <p  className=' '>Enter your credentials to access the admin panel</p>
             </div>
            <form className='mt-6 w-full sm:max-w-md text-gray-600' onSubmit={handleSubmit} >
                   <div className='flex flex-col'>
                       <label >Email</label>
                       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder='your email id' 
                       className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                   </div>
                   <div className='flex flex-col'>
                       <label >Password</label>
                       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="Password" required placeholder='your password' 
                       className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                   </div>
                   <button className='w-full py-3 font-medium bg-blue-700 text-white rounded cursor-pointer hover:bg-blue-600/90 transition-all' type='submit'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
