import React from 'react'

import Overview from '../../../components/overview'
import { Login } from '../../../components/Login'
import SignupPage, { Signup } from '../../../components/Signup'


function Page() {
  return (
    <div className='bg-gray-100 bg-linear-to-br from-blue-200 via-white to-purple-200   min-h-screen backdrop-blur-4xl'>
        <div className=''>
            <SignupPage/>
        </div>
    </div>
  )
}

export default Page
