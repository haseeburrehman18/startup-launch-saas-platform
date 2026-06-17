import React from 'react'
import { GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { BiLogOut } from 'react-icons/bi'
import { Switch } from "@/components/ui/switch"
function Settingaccount() {
    return (
        <div className='mt-6'>
            <div className='rounded-2xl bg-white '>
                <div className='grid grid-cols-4 border-t border-gray-200 border-b text-md'>
                    <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                        <a className='font-extrabold'><GoPerson /></a>
                        <p className='text-[#4B5C70]'>Profile</p>
                    </button>
                    <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                        <a></a>
                        <p className='text-[#4B5C70] '>Startup Details</p>
                    </button>
                    <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                        <a className='text-[#4B5C70]'></a>
                        <p className='text-[#4B5C70]'>Billing</p>
                    </button>
                    <button className='p-3 flex items-center justify-center  border-b-2 border-[#1E9C90] font-bold bg-[#F0FDFA] gap-2'>
                        <a className='text-[#179689] font-extrabold'><MdOutlineSettings /></a>
                        <p className='text-[#179689]'>Account</p>
                    </button>
                </div>
                <div className='p-5'>
                    <div className='font-bold mb-4'>
                        <h1 className='text-lg'>Account Settings</h1>
                    </div>
                    <div className='sm:w-full md:w-[70%] lg:w-[70%]'>
                        <div>
                            <h1 className='font-bold'>Change Password</h1>
                            <div className='my-3'>
                                <Label className='font-semibold text-[#374160] text-sm'>Current Password</Label>
                                <Input className='mt-1'/>
                            </div>
                            <div className='my-3'>
                                <Label className='font-semibold text-[#374160] text-sm'>New Password</Label>
                                <Input className='mt-1'/>
                            </div>
                            <div className='my-3'>
                                <Label className='font-semibold text-[#374160] text-sm'>Confirm New Password</Label>
                                <Input className='mt-1'/>
                            </div>
                            <div className=''>
                                <button className='rounded-xl py-3 px-6 text-sm shadow text-white font-semibold bg-linear-to-r from-[#4dbea9] to-[#07dfe2]'>
                                    Update Password
                                </button>
                            </div>
                            <div className='mt-6'>
                                <h1 className='font-bold mb-3'>Notifications</h1>
                                <div className='rounded-2xl bg-[#f4f7fa] p-4 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Email notifications</h1>
                                        <p className='text-sm font-semibold text-gray-400'>Recieve updates via email</p>
                                    </div>
                                    <div><Switch /></div>
                                </div>
                                <div className='rounded-2xl bg-[#f4f7fa] p-4 flex justify-between items-center my-3'>
                                    <div>
                                        <h1 className='font-bold'>Marketing emails</h1>
                                        <p className='text-sm font-semibold text-gray-400'>Recieve updates via email</p>
                                    </div>
                                    <div><Switch /></div>
                                </div>
                                <div className='rounded-2xl bg-[#f4f7fa] p-4 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Weekly reports</h1>
                                        <p className='text-sm font-semibold text-gray-400'>Recieve updates via email</p>
                                    </div>
                                    <div className=''><Switch /></div>
                                </div>
                            </div>
                            <div className='rounded-2xl border mt-6 p-4 bg-[#FEF2F2]'>
                                <h1 className='text-sm text-[#9f2d2c] font-bold mb-2'>Danger Zone</h1>
                                <p className='text-[12px] text-[#B91C28] my-3'>Once you delete your account, there is no going back. Please be certain.</p>
                                <button className='rounded-xl text-sm font-semibold text-white bg-[#DC2626] py-3 px-4'>Delete Account</button>
                            </div>
                            <hr className='text-gray-300 my-6' />
                            <div>
                                <button className='flex items-center text-white gap-2 rounded-xl bg-[#111827] py-2 px-3'>
                                    <p><BiLogOut /></p>
                                    <p className='font-bold'>Logout</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settingaccount