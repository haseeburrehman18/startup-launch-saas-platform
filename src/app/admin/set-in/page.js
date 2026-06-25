'use client'

import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'
import { BiWallet } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Settingprofile from '../../../components/settingprofile'
import Settingstartupdetails from '../../../components/settingstartupdetails'
import Settingbilling from '../../../components/settingbilling'
import Settingaccount from '../../../components/settingaccount'

function page() {


let [tab,setTab]=useState([
  {icon:<GoPerson />,text:"Profile",active:true,comp:<Settingprofile/>},
  {icon:<HiOutlineBuildingOffice2 />,text:"Startup Details",active:false,comp:<Settingstartupdetails/>},
  {icon:< BiWallet/>,text:"Billing",active:false,comp:<Settingbilling/>},
  {icon:<MdOutlineSettings />,text:"Account",active:false,comp:<Settingaccount/>},
  
])

  return (
    <div className='p-5 min-h-screen'>
        <div>
            <h1 className='text-3xl font-bold'>Settings</h1>
            <p className='my-2 text-sm text-gray-500'>Manage your account and startup preferences</p>
        </div>
        <div>

          <div className='grid grid-cols-4 border-t border-gray-200 bg border-b bg-white text-md rounded-t-2xl overflow-hidden' >
{
  tab.map((item,idx)=>(
            
              <button onClick={()=>{
                setTab(
                  tab.map((it,id)=>({
                    ...it,
                    active: id==idx
              }))
                )
              }} className={`p-3 flex items-center justify-center  border-b-2 ${item.active ?"border-[#1E9C90] text-[#179689] bg-[#F0FDFA]  ":" text-[#4B5C70] border-0"}    font-bold gap-2`}>
                    <a className=' font-extrabold'>{item.icon}</a> 
                    <p className=''>{item.text}</p>
                </button>



            

  
  ))
}  

          </div>  

{tab.map((item,idx)=>(
  item.active && item.comp
))}

        </div>
    </div>
  )
}

export default page