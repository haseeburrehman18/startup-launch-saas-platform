import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"

import React from 'react'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'

function Settingstartupdetails() {
  return (
    <div className='mt-6'>
        <div className='rounded-2xl bg-white '>
            <div className='grid grid-cols-4 border-t border-gray-200 border-b text-md'>
                <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                    <a className='font-extrabold'><GoPerson /></a>
                    <p className='text-[#4B5C70]'>Profile</p>
                </button>
                <button className='p-3 flex items-center justify-center  border-b-2 border-[#1E9C90] font-bold bg-[#F0FDFA] gap-2'>
                    <a className='text-[#179689] font-extrabold'></a>
                    <p className='text-[#179689]'>Startup Details</p>
                </button>
                <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                    <a></a>
                    <p className='text-[#4B5C70]'>Billing</p>
                </button>
                <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                    <a className='text-[#4B5C70]'><MdOutlineSettings /></a>
                    <p className='text-[#4B5C70]'>Account</p>
                </button>
            </div>
        <div className='p-5'>
        <div className='font-bold mb-4'>
            <h1>Startup Details</h1>
        </div>
                <div className='sm:w-full md:w-[70%] lg:w-[70%]'>
                    <div className=''>
                        <div>
                            <Label className='font-semibold text-[#374160] text-sm'>Student Name</Label>
                            <Input className='mt-1'/>
                        </div>
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Industry</Label>
                        <Input type='email'className='mt-1' />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Description</Label>
                        <Input className="h-25 mt-1" type='text' />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Target Market</Label>
                        <Input type='contact' className='mt-1' />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Website</Label>
                        <Input type='link' className='mt-1' palceholder="Add a link of your profile" />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Location</Label>
                        <Input type='location'required  className='mt-1'/>
                    </div>
                    <div className='p-3'>
                        <button className='rounded-xl py-3 px-5 text-sm text-white font-semibold bg-linear-to-r from-[#4dbea9] to-[#07dfe2]'>
                            Update Startup Info
                        </button>
                    </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Settingstartupdetails