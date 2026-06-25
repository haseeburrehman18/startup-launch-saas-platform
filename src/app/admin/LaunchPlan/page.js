"use client"
import React from 'react'
import { GrCalendar } from 'react-icons/gr'
import { LuClock3 } from 'react-icons/lu'
import { RiRocketLine } from 'react-icons/ri'
import { Checkbox } from "@/components/ui/checkbox"
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import Roadmapweeks from '../../../components/roadmapweeks'

function page() {
    return (
        <div className='p-5 bg-gray-100 min-h-screen'>
            <div className=''>
                <h1 className='my-3 text-2xl font-bold'>Launch Plan</h1>
                <p className='text-sm text-gray-500 mb-6'>Your complete roadmap from pre-launch to first 30 days</p>
                <div className='p-5 border-3 border-[#BDF9EE] rounded-2xl bg-[#EEFDFC] flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-bold'>Launch Date</h1>
                        <p className='text-gray-500 text-[13px] pb-3 my-2'>Recommended launch window based on market analysis</p>
                        <div className='flex gap-4'>
                            <div className='rounded-lg shadow-md bg-white px-6 py-3'>
                                <p className='text-2xl font-bold text-[#16988C]'>March 15, 2024</p>
                                <p className='my-1 text-[13px] font-semibold text-gray-500'>Friday - Peak ordering day</p>
                            </div>
                            <div className='mt-4'>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#4FA999]'><LuClock3 /></p>
                                    <p className='text-sm font-semibold text-gray-500'>45 days until launch</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <p className='text-[#4FA999]'><GrCalendar /></p>
                                    <p className='text-sm font-semibold text-gray-500'>Spring season - optimal timing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center rounded-full h-25 w-25 bg-white shadow-lg'>
                            <div className='text-3xl text-[#0D9488] font-bold text-[42px]'><RiRocketLine /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5 my-5 rounded-2xl bg-white'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>Pre-Launch Checklist</h1>
                    <div className='flex  gap-2'>
                        <p className='text-[#16988C] font-bold text-sm'>0</p>
                        <p className='text-gray-500 font-semibold text-sm'>/ 10 Completed</p>
                    </div>
                </div>
                <div className='mt-4 flex flex-col gap-0.5'>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Finalize Brand identity and logo
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Branding</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Complete website development
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Website</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Set up payment processing
                            </label>
                        </div>
                        <div className='rounded-md text-sm py-1 px-2 bg-[#F3F4F6] text-gray-500'>Operations</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Recuuit and train delivery drivers
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-sm text-gray-500'>Operations</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Partner with 10+ local restraunts
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Partnerships</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Secure biodegradable packaging suppliers
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Supply Chain</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Set up customer support system
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Operations</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Create social media accounts
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Marketing</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Build email list (500+ subscribers)
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Marketing</div>
                    </div>
                    <div className='rounded-2xl border flex items-center justify-between p-2.5 my-2 '>
                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms-checkbox-basic" className="shadow-sm border text-2xl" />
                            <label
                                htmlFor="terms-checkbox-basic"
                                className="text-[14px] font-semibold cursor-pointer">
                                Test delivery logistics in target area
                            </label>
                        </div>
                        <div className='rounded-md py-1 px-2 bg-[#F3F4F6] text-gray-500 text-sm'>Operations</div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl bg-white p-4'>
                <h1 className='font-bold'>Launch Day Schedule</h1>


                <div className='flex  items-center justify-start gap-4'>

                    <div className='flex items-center justify-center '>                   
                             <div className='whitespace-nowrap rounded-lg py-1 px-2 bg-[#F0FDFA] text-[#177D82] font-semibold mt-6 mb-14'>8:00 AM</div>

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='rounded-2xl w-full bg-[#F9FAFB] p-3 font-semibold mt-6 mb-3'>
                            <div >
                                <h1 className='font-bold text-[#433d4b]'>Send launch email to subscribers</h1>
                                <p className='text-sm text-gray-500 my-1'>Owner: Marketing Team</p>
                            </div>
                        </div>
                    </div>

                </div>





<div className='flex  items-center justify-start gap-4'>

                    <div className='flex items-center justify-center '>                   
                             <div className='whitespace-nowrap rounded-lg py-1 px-2 bg-[#F0FDFA] text-[#177D82] font-semibold mt-6 mb-14'>8:00 AM</div>

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='rounded-2xl w-full bg-[#F9FAFB] p-3 font-semibold mt-6 mb-3'>
                            <div >
                                <h1 className='font-bold text-[#433d4b]'>Send launch email to subscribers</h1>
                                <p className='text-sm text-gray-500 my-1'>Owner: Marketing Team</p>
                            </div>
                        </div>
                    </div>

                </div>









<div className='flex  items-center justify-start gap-4'>

                    <div className='flex items-center justify-center '>                   
                             <div className='whitespace-nowrap rounded-lg py-1 px-2 bg-[#F0FDFA] text-[#177D82] font-semibold mt-6 mb-14'>8:00 AM</div>

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='rounded-2xl w-full bg-[#F9FAFB] p-3 font-semibold mt-6 mb-3'>
                            <div >
                                <h1 className='font-bold text-[#433d4b]'>Send launch email to subscribers</h1>
                                <p className='text-sm text-gray-500 my-1'>Owner: Marketing Team</p>
                            </div>
                        </div>
                    </div>

                </div>





{/* <div className='flex  items-center justify-start gap-4'>

                    <div className='flex items-center justify-center '>                   
                             <div className='whitespace-nowrap rounded-lg py-1 px-2 bg-[#F0FDFA] text-[#177D82] font-semibold mt-6 mb-14'>8:00 AM</div>

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='rounded-2xl w-full bg-[#F9FAFB] p-3 font-semibold mt-6 mb-3'>
                            <div >
                                <h1 className='font-bold text-[#433d4b]'>Send launch email to subscribers</h1>
                                <p className='text-sm text-gray-500 my-1'>Owner: Marketing Team</p>
                            </div>
                        </div>
                    </div>

                </div> */}




            </div>
            <div className='p-4 rounded-2xl bg-white mt-4'>
                <h1 className='font-bold'>First 30-Day Roadmap</h1>
                <div className='my-3'><Roadmapweeks /></div>
                <div className='my-3'><Roadmapweeks /></div>
                <div className='my-3'><Roadmapweeks /></div>
                <div className='my-3'><Roadmapweeks /></div>
            </div>
        </div>
    )
}

export default page