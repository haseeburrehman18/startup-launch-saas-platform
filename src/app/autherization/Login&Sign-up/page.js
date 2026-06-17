import React from 'react'

import { Signup } from '../../../components/Signup'
import Overview from '../../../components/overview'
import { Login } from '../../../components/Login'


function Page() {
  return (
    <div className='bg-gray-100 bg-linear-to-br from-blue-200 via-white to-purple-200   min-h-screen backdrop-blur-4xl'>
        <div className=''>
            {/* <Signup/> */}
            <div className='flex items-center justify-center gap-2 py-5 md:py-5'>
                <img className='w-1/15' src={"/l.png"}></img>
                <h1 className='font-bold text-[#1B2C71] text-2xl font-sans'>Solve<span className='text-[#649E36]'>Sphere</span></h1>
            </div>
            <Login/>
        </div>
    </div>
  )
}

export default Page
