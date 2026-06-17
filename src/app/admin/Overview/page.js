import React from 'react'
import Overview from '../../../components/overview'
import Overviewcard from '../../../components/overviewcard'
import { RiDownloadLine, RiEditLine, RiTeamLine } from 'react-icons/ri'
import { BiSolidFilePdf } from 'react-icons/bi'
import { BsArrowRepeat, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { TbSpeakerphone } from 'react-icons/tb'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { MdOutlineArrowForward } from 'react-icons/md'
import { FiCheck } from 'react-icons/fi'

function page() {
  return (
        <div className='p-4'>
            <div className=''>
                <p className='font-bold text-3xl'>Welcome back</p>
            </div>
            <div className=' py-2 pb-5 text-sm text-gray-500'>
                Here's your startup progress Overview.
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pb-5'>
                <Overviewcard icon={<FiCheck/>} status={"High"} percentage={"92%"} description={"Validation Score"}/>
                <Overviewcard icon={<FiCheck/>} status={"High"} percentage={"$125K"} description={"Year 1 Revenue"}/>
                <Overviewcard icon={<FiCheck/>} status={"Ready"} percentage={"Complete"} description={"Brand Identity"}/>
                <Overviewcard icon={<FiCheck/>} status={"High"} percentage={"Website"} description={"Structure Ready"}/>
            </div>
            <div className='flex gap-6'>
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
                        <div className=' shadow-md flex justify-between bg-linear-to-r from-[#61b989] to-[#09B6C9] rounded-2xl p-4 text-white items-center'>
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
            <div className='flex sm:flex-col md:flex-row gap-6 pt-6 '>
                <div className='p-4 rounded-2xl bg-white  sm:w-full md:w-[50%] lg:w-[50%]'>
                    <p className='font-bold text-[17px]'>Completion Progress</p>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Idea Validation
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                100%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Business Plan
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                100%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Brand & Design
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                100%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Financial Plan
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                100%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Website Structure
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                85%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-[85%] h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#F45E2B]'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Marketing Strategy
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                70%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#F45E2B]'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                Launch Roadmap
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                60%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                <div className='h-2 rounded-2xl bg-[#F45E2B]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 rounded-2xl bg-white  sm:w-full md:w-[50%] lg:w-[50%]'>
                    <p className='font-bold text-[17px]'>Recommended Next Steps</p>
                    <div className='flex'>
                        <div className='flex flex-col gap-13 mx-4 pt-9 w-[8%]'>
                            <p className='bg-[#0DB7BC] p-3 rounded-md w-9.5 text-white text-md font-bold'>
                                <BsReverseLayoutTextWindowReverse />
                            </p>
                            <div className='bg-[#0DB7BC] p-3 rounded-md w-9.5  text-white text-md font-bold'>
                                <TbSpeakerphone />
                            </div>
                            <div className='bg-[#0DB7BC] p-3 rounded-md w-9.5 text-white text-md font-bold'>
                                <HiOutlineRocketLaunch />
                            </div>
                            <div className='bg-[#0DB7BC] p-3 rounded-md w-9.5 text-white text-md font-bold'>
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