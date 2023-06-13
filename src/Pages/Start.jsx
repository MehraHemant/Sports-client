import React from 'react'
import { Link } from 'react-router-dom'



function Start() {
    return (
    <div className='w-screen grid min-h-screen grid-cols-1 sm:grid-cols-2'>
      <Link to='/signup' className='md:grayscale saturate-200 group md:hover:saturate-200 md:hover:grayscale-0 self-center h-full flex flex-col justify-center after:content("") after:z-[-1] after:w-full after:h-full after:absolute after:bg-signup after:top-0 after:left-0 after:bg-no-repeat after:bg-left-bottom after:bg-cover after:opacity-50 '>
        <div className='p-8 group-hover:backdrop-blur-sm sm:p-14 space-y-5'>
          <h2 className='text-4xl font-semibold'>Signup</h2>
          <div className='text-lg'>If you are visting first time you can start with sign-up.</div>
        </div>
      </Link>
      <Link to='/login' className='group saturate-200 md:grayscale md:hover:saturate-200 md:hover:grayscale-0 self-center h-full flex flex-col justify-center after:content("") after:z-[-1] after:w-full  after:h-full after:absolute after:bg-signin after:top-0 after:left-0 after:bg-no-repeat after:bg-center after:bg-cover after:opacity-50 '>
        <div className='p-8 group-hover:backdrop-blur-sm sm:p-14 space-y-5'>
          <h2 className='text-4xl font-semibold '>Signin</h2>
          <div className='text-lg'>Enter your login details to access the website.</div>
        </div>
      </Link>
    </div>
  )
}

export default Start