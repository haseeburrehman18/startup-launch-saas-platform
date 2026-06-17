import React from 'react'
import { GoCreditCard, GoPerson } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { RiDownloadLine } from 'react-icons/ri'

function Settingbilling() {
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
                        <p className='text-[#4B5C70]'>Startup Details</p>
                    </button>
                    <button className='p-3 flex items-center justify-center  border-b-2 border-[#1E9C90] font-bold bg-[#F0FDFA] gap-2'>
                        <a className='text-[#179689] font-extrabold'></a>
                        <p className='text-[#179689]'>Billing</p>
                    </button>
                    <button className='p-3 flex items-center justify-center font-bold bg-white gap-2'>
                        <a className='text-[#4B5C70]'><MdOutlineSettings /></a>
                        <p className='text-[#4B5C70]'>Account</p>
                    </button>
                </div>
                <div className='p-5'>
                    <div className='font-bold mb-4'>
                        <h1>Billing & Subscription</h1>
                    </div>
                    <div className='sm:w-full md:w-[70%] lg:w-[70%]'>
                        <div className='rounded-2xl bg-[#EFFEFC] border-2 border-[#D9FCF5] '>
                            <div className='flex justify-between items-center p-4'>
                                <div>
                                    <h1 className='font-bold'>Starter Plan</h1>
                                    <p className='text-sm text-gray-500 font-semibold'>Billed Monthly</p>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-[#1A9A8F]'>$49</h1>
                                    <p className='text-sm text-gray-500 font-semibold'>/month</p>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div className='flex flex-row gap-3 text-nowrap'>
                                    <button className='rounded-md border border-[#23a99d] text-sm font-semibold py-2 px-3  text-[#23a99d] bg-white'>Change Plan</button>
                                    <button className='border rounded-md font-semibold py-2 px-3 text-sm text-[#424649] bg-white'>Cancel Subscription</button>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <h1 className='font-bold my-4'>Payment Method</h1>
                            <div className='p-4 flex justify-between items-center border border-gray-200 rounded-2xl'>
                                <div className='p-1 flex gap-3 '>
                                    <span className='rounded-sm p-3 bg-[#F3F4F6] font-extrabold text-lg'><GoCreditCard /></span>
                                    <div className=''>
                                        <p className='text-sm font-bold text-nowrap'>4545 3535 5353 3535</p>
                                        <p className='text-sm font-semibold text-gray-400'>Expires 12/25</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-[#434f65] font-semibold rounded-sm sm:flex-row py-1.5 px-2.5 bg-[#F3F4F6] mb-1 text-sm'>Update</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold my-4'>Billing History</h1>
                            <div className='flex justify-between items-center p-3 rounded-2xl bg-[#f4f7fa]'>
                                <div>
                                    <h1 className='font-bold'>Jan 1, 2024</h1>
                                    <p className='text-sm text-gray-400 font-semibold'>$49.00</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-sm rounded-md py-1 px-1.5 text-[#15814C] font-semibold bg-[#F0FDF4]'>Paid</p>
                                    <p className='text-[#15814C]'><RiDownloadLine /></p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center p-3 rounded-2xl bg-[#f3f6f9] my-4'>
                                <div>
                                    <h1 className='font-bold'>Dec 1, 2023</h1>
                                    <p className='text-sm text-gray-400 font-semibold'>$49.00</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-sm rounded-md py-1 px-1.5 text-[#15814C] font-semibold bg-[#F0FDF4]'>Paid</p>
                                    <p className='text-[#15814C]'><RiDownloadLine /></p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center p-3 rounded-2xl bg-[#f3f6f9]'>
                                <div>
                                    <h1 className='font-bold'>Feb 1, 2025</h1>
                                    <p className='text-sm text-gray-400 font-semibold'>$49.00</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-sm rounded-md py-1 px-1.5 text-[#15814C] font-semibold bg-[#F0FDF4]'>Paid</p>
                                    <p className='text-[#15814C]'><RiDownloadLine /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settingbilling