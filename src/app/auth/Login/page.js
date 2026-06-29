import React from 'react'
import LoginPage, { Login } from '../../../components/Login'
import "@/app/globals.css";

function page() {
  return (
 <div className='bg-gray-100 bg-linear-to-br from-blue-200 via-white to-purple-200   min-h-screen backdrop-blur-4xl'>
        <div className=''>
            <LoginPage/>
        </div>
    </div>
      )
}

export default page