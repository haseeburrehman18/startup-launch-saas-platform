import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"

import React from 'react'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'

function Settingprofile() {
    return (
        <div className=''>
        <div className='rounded-b-2xl bg-white '>

            <div className='p-5'>
            <div>
                <h1 className='font-bold'>Profile Information</h1>
                <div className='p-3 flex gap-3 items-center'>
                    <div className='rounded-full bg-[#0DB7BA] p-4 h-23 w-23 flex justify-center items-center font-bold text-white text-2xl'>AJ</div>
                    <div>
                        <button className='text-[#434f65] font-semibold rounded-sm p-1.5 bg-[#F3F4F6] mb-1 text-sm'>Change Photo</button>
                        <p className='text-sm text-gray-500'>JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                </div>
                <div className='sm:w-full md:w-[70%] lg:w-[70%]'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <Label className='font-semibold text-[#374160] text-sm'>First Name</Label>
                            <Input className='mt-1'/>
                        </div>
                        <div>
                            <Label className='font-semibold text-[#374160] text-sm'>Last Name</Label>
                            <Input className='mt-1'/>
                        </div>
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Email</Label>
                        <Input type='email'className='mt-1' />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Phone</Label>
                        <Input type='contact' className='mt-1' />
                    </div>
                    <div className='my-4'>
                        <Label className='font-semibold text-[#374160] text-sm'>Bio</Label>
                        <Input className="h-25 mt-1" type='text' />
                    </div>
                    <div className='p-3'>
                        <button className='rounded-xl py-3 px-5 text-sm text-white font-semibold bg-linear-to-r from-[#4dbea9] to-[#07dfe2]'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Settingprofile