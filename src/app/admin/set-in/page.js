import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'
import Settingprofile from '../../../components/settingprofile'
import Settingstartupdetails from '../../../components/settingstartupdetails'
import Settingbilling from '../../../components/settingbilling'
import Settingaccount from '../../../components/settingaccount'

function page() {
  return (
    <div className='p-5 min-h-screen'>
        <div>
            <h1 className='text-3xl font-bold'>Settings</h1>
            <p className='my-2 text-sm text-gray-500'>Manage your account and startup preferences</p>
        </div>
        <div>
            {/* <Settingprofile/> */}
            {/* <Settingstartupdetails/> */}
            {/* <Settingbilling/> */}
            <Settingaccount/>
        </div>
    </div>
  )
}

export default page