import React from 'react'
import Overview from '../../../components/overview'
import Overviewcard from '../../../components/overviewcard'
import { RiDownloadLine, RiEditLine, RiTeamLine } from 'react-icons/ri'
import { BiSolidFilePdf } from 'react-icons/bi'
import { BsArrowRepeat, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { TbSpeakerphone } from 'react-icons/tb'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { MdOutlineArrowForward, MdOutlineColorLens } from 'react-icons/md'
import { FiCheck } from 'react-icons/fi'
import { LuCircleDollarSign, LuPanelsTopLeft, LuPanelTop } from 'react-icons/lu'
import { IoArrowUp } from 'react-icons/io5'
import OverviewProgress from '../../../components/overviewProgress'

function page() {
  return (
        <div className='p-4'>
            <div className=''>
                <p className='font-bold text-3xl'>Welcome back</p>
            </div>
            <div className=' py-2 pb-5 text-sm text-gray-500'>
                Here's your startup progress Overview.
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pb-5'>
                <Overviewcard icon={<FiCheck/>} status={"High"} percentage={"92%"} description={"Validation Score"} color={"text-[#0EB7B8]"}/>
                <Overviewcard icon={<LuCircleDollarSign/>} status={<IoArrowUp />} percentage={"$125K"} description={"Year 1 Revenue"} bgcolor={"bg-gradient-to-linear from-[#39E014] to-[#20AB3E]"} color={"text-[#20AB3E]"}/>
                <Overviewcard icon={<MdOutlineColorLens />} status={"Ready"} percentage={"Complete"} description={"Brand Identity"} bgcolor={"bg-gradient-to-linear from-[#8427E6] to-[#E627CD]"} color={"text-[#20AB3E]"}/>
                <Overviewcard icon={<LuPanelsTopLeft />} status={"7 pages"} percentage={"Website"} description={"Structure Ready"} bgcolor={"bg-gradient-to-linear from-[#E37F30] to-[#BF661F]"} color={"text-[#4B6078]"}/>
            </div>
            <div className='flex gap-6 md:flex-row flex-col'>
                <div className='p-4 lg:w-[65%] sm:w-[55%] rounded-2xl h-auto bg-white'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Your Startup: EcoDelivery</p>
                        <div className='flex gap-0.5 text-[12px]'>
                            <button className='text-black'><RiEditLine /></button>
                            <button className='pb-0.5 text-gray-500 font-bold text-nowrap'>Edit Details</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='pt-6 text-gray-600 font-bold text-sm'>Industry</h1>
                        <div className='py-1'>
                            <button className='bg-[#F0FDFA] rounded-md text-[#28837C] '>
                                <p className='text-[13px] p-1 font-bold'>Food & Beverage</p>
                            </button>
                        </div>
                        <div className='py-1'>
                            <p className='text-gray-600 text-sm font-bold'>Description</p>
                            <p className='text-gray-500 py-1'>Sustainable food delivery platform connecting eco-conscious consumers with local
                                restaurants using electric vehicles and biodegradable packaging.</p>
                        </div>
                        <div className='flex justify-start items-center gap-25 pt-5'>
                            <div>
                                <div className='text-gray-600 font-bold text-sm py-1'>Target Market</div>
                                <div className='text-gray-500 text-sm'>Urban millennials aged 25-40</div>
                            </div>
                            <div>
                                <div className='text-gray-600 font-bold text-sm py-1'>Budget Range</div>
                                <div className='text-gray-500 text-sm'>$50k - $100k</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 lg:w-[35%] sm:w-[45%] rounded-2xl h-auto bg-white'>
                    <div className='font-bold text-xl pb-5'>Quick Actions</div>
                    <div className='grid sm:grid-rows-1 gap-3.5'>
                        <div className=' shadow-md flex justify-between bg-linear-to-br from-[#15ccbd] to-[#17b7d0] rounded-2xl p-4 text-white items-center'>
                            <div className='font-semibold'>Download Business Plan</div>
                            <div><RiDownloadLine /></div>
                        </div>
                        <div className='shadow-sm flex justify-between  border-2  rounded-2xl p-4 text-black items-center'>
                            <div className='font-semibold'>Export PDF</div>
                            <div><BiSolidFilePdf /></div>
                        </div>
                        <div className='shadow-sm flex justify-between border-2 rounded-2xl  p-4 text-black items-center'>
                            <div className='font-semibold'>Regenerate Output</div>
                            <div><BsArrowRepeat /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col gap-6 pt-6 '>
                <div className='p-4 rounded-2xl bg-white  sm:w-full md:w-[50%] lg:w-[50%]'>
                    <p className='font-bold text-[17px]'>Completion Progress</p>
                    <OverviewProgress name="Idea Validation" per={100}/>
                    <OverviewProgress name="Business Plan" per={100}/>
                    <OverviewProgress name="Brand & Design" per={100}/>
                    <OverviewProgress name="Financials Plan" per={100}/>
                    <OverviewProgress name="Web Structure" per={65}/>
                    <OverviewProgress name="Marketing Strategy" per={30}/>
                    <OverviewProgress name="Launch Roadmap" per={50}/>
                </div>
                <div className='p-4 rounded-2xl shadow-lg bg-white  sm:w-full md:w-[50%] lg:w-[50%]'>
                    <p className='font-bold text-[17px]'>Recommended Next Steps</p>
                    <div className='flex'>
                        <div className='flex flex-col gap-13 mx-4 pt-9 w-[8%]'>
                            <p className='bg-linear-to-br from-[#15ccbd] to-[#17b7d0] p-3 rounded-md w-9.5 text-white text-md font-bold'>
                                <LuPanelsTopLeft />
                            </p>
                            <div className='bg-linear-to-br from-[#15ccbd] to-[#17b7d0] p-3 rounded-md w-9.5  text-white text-md font-bold'>
                                <TbSpeakerphone />
                            </div>
                            <div className='bg-linear-to-br from-[#15ccbd] to-[#17b7d0] p-3 rounded-md w-9.5 text-white text-md font-bold'>
                                <HiOutlineRocketLaunch />
                            </div>
                            <div className='bg-linear-to-br from-[#15ccbd] to-[#17b7d0] p-3 rounded-md w-9.5 text-white text-md font-bold'>
                                <RiTeamLine />
                            </div>
                        </div>
                        <div className='w-[80%] flex flex-col gap-12 mx-4 pt-9'>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Complete Website Copy</p>
                                    <button className='text-gray-400 text-sm'><MdOutlineArrowForward /></button>
                                </div>
                                <div className='text-[12px] text-gray-500'>Finalize remaining page content</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Review Marketing Plan</p>
                                    <button className='text-gray-400 text-sm'><MdOutlineArrowForward /></button>
                                </div>
                                <div className='text-[12px] text-gray-500'>Check social media strategy</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Prepare Launch</p>
                                    <button className='text-gray-400 text-sm'><MdOutlineArrowForward /></button>
                                </div>
                                <div className='text-[12px] text-gray-500'>Set up pre-launch checklist</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Define Team Roles</p>
                                    <button className='text-gray-400 text-sm'><MdOutlineArrowForward /></button>
                                </div>
                                <div className='text-[12px] text-gray-500'>Assign responsibilities</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>  )
}

export default page