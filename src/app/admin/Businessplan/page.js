import React from 'react'
import Executivesummary from '../../../components/executivesummary'
import { RiDownloadLine, RiErrorWarningLine, RiLightbulbFlashLine } from 'react-icons/ri'
import { HiCheck } from 'react-icons/hi'
import { LuCircleDollarSign } from 'react-icons/lu'
import { TbClockHour3 } from 'react-icons/tb'
import Businessplancoststructure from '../../../components/businessplancoststructure'

function page() {
    return (
        <div className='p-5  min-h-screen'>
            <div className='flex items-center justify-end'>
                
                <div className=''>
                    <button className='py-3 px-5 flex justify-center items-center gap-1 rounded-xl text-white bg-[#11B8AF]'>
                        <div className='font-bold text-md'>
                            <RiDownloadLine /> 
                        </div>
                        <p className='font-semibold text-sm text-nowrap'>
                            Download PDF
                        </p>
                    </button>
                </div>
            </div>
            <div className=''>
                <Executivesummary />
            </div>
            <div>
                <div className='p-5 rounded-xl bg-white mt-4'>
                    <div className='flex gap-2'>
                        <div className='p-3 text-white rounded-xl bg-[#F55F29]'>
                            <RiErrorWarningLine />
                        </div>
                        <div className='text-2xl font-bold '>Problem</div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-4'>
                        <div className='p-5 rounded-xl bg-[#F9FAFB]'>
                            <h1 className='py-3 font-bold text-[18px]'>Environmental Impact</h1>
                            <p className='text-[#747C8D] font-semibold text-sm'>Traditional food delivery generates
                                massive waste through single-use plastics
                                and inefficient vehicle routes, contributing
                                to urban pollution.</p>
                        </div>
                        <div className='p-5 rounded-xl bg-[#F9FAFB]'>
                            <h1 className='py-3 font-bold text-[18px]'>Customer Guilt</h1>
                            <p className='text-[#747C8D] font-semibold text-sm'>Eco-conscious consumers face a dilemma
                                between convenience and environmental
                                values, often choosing to cook at home
                                instead.</p>
                        </div>
                        <div className='p-5 rounded-xl bg-[#F9FAFB]'>
                            <h1 className='py-3 font-bold text-[18px]'>Restraunt Challenges</h1>
                            <p className='text-[#747C8D] font-semibold text-sm'>Restaurants struggle to find affordable
                                sustainable packaging and delivery options
                                that align with their brand values.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-5 rounded-xl bg-white mt-4'>
                    <div className='flex gap-2'>
                        <div className='p-3 text-white rounded-xl bg-[#1FC26C]'>
                            <RiLightbulbFlashLine />
                        </div>
                        <div className='text-2xl font-bold '>Solution</div>
                    </div>
                    <div className='grid grid-rows-4 gap-6 mt-4 '>
                        <div className='p-3 bg-[#F9FAFB] rounded-2xl flex '>
                            <div className='p-3'>
                                <p className='bg-[#0DB7BC] h-9 p-2.5 rounded-md w-9 text-white text-md font-bold'><HiCheck /></p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold my-1'>Electric Vehicle Fleet</h1>
                                <p className='text-gray-500 text-sm font-semibold'>All deliveries made using electric bikes and vehicles, reducing carbon emissions by 90% compared to traditional delivery.</p>
                            </div>
                        </div>
                        <div className='p-3 bg-[#F9FAFB] rounded-2xl flex '>
                            <div className='p-3'>
                                <p className='bg-[#0DB7BC] h-9 p-2.5 rounded-md w-9 text-white text-md font-bold'><HiCheck /></p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold my-1'>Biodegrable Pakaging </h1>
                                <p className='text-gray-500 text-sm font-semibold'>Partner with restaurants to provide compostable containers and utensils at no extra cost to consumers.</p>
                            </div>
                        </div>
                        <div className='p-3 bg-[#F9FAFB] rounded-2xl flex'>
                            <div className='p-3'>
                                <p className='bg-[#0DB7BC] h-9 p-2.5 rounded-md w-9 text-white text-md font-bold'><HiCheck /></p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold my-1'>Carbon Tracking</h1>
                                <p className='text-gray-500 text-sm font-semibold'>Real-time dashboard showing environmental impact saved with each order, gamifying sustainability.</p>
                            </div>
                        </div>

                        <div className='p-3 bg-[#F9FAFB] rounded-2xl flex '>
                            <div className='p-3'>
                                <p className='bg-[#0DB7BC] h-9 p-2.5 rounded-md w-9 text-white text-md font-bold'><HiCheck /></p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold my-1'>Route Optimization</h1>
                                <p className='text-gray-500 text-sm font-semibold'>Al-powered delivery routing that minimizes distance and maximizes efficiency, reducing delivery times by 25%.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='p-5 rounded-xl bg-white mt-4'>
                    <div className='flex gap-2'>
                        <div className='p-3 text-white rounded-xl bg-linear-to-br from-[#C94FCA] to-[#E249A6]'>
                            <TbClockHour3 />
                        </div>
                        <div className='text-2xl font-bold '>Market Opportunity</div>
                    </div>
                    <div className='mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className='bg-[#EEFDFD] rounded-2xl p-4 border border-[#aff0ea]'>
                            <div className='my-2 font-bold '>Total Addressable Market</div>
                            <div className='text-[26px] font-bold text-[#0D9488]'>$2.4B</div>
                            <div className='text-sm text-gray-500'>Sustainable food delivery ma rket in North America</div>
                        </div>
                        <div className='bg-[#FBF3FB] rounded-2xl p-4 border border-[#dbc9eb]'>
                            <div className='font-bold'>Serviceable Market</div>
                            <div className='my-2 text-[26px] font-bold text-[#9333EA]'>$380M</div>
                            <div className='text-sm text-gray-500'>Urban areas with high eco-conscious population</div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='p-5 rounded-xl bg-white mt-4'>
                    <div className='flex gap-2'>
                        <div className='p-3 text-white rounded-xl bg-linear-to-br from-[#378d75] to-[#07db20]'>
                            <LuCircleDollarSign />
                        </div>
                        <div className='text-2xl font-bold '>Revenue Model</div>
                    </div>
                    <div className='mt-4'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                            <div className='bg-[#F9FAFB] flex flex-col items-center rounded-2xl p-4'>
                                <div className='text-[26px] font-bold text-[#0D9488]'>45%</div>
                                <div className='my-2 font-bold '>Delievery Fees</div>
                                <div className='text-sm text-gray-500'>$3.99 per order</div>
                            </div>
                            <div className='bg-[#F9FAFB] flex flex-col items-center rounded-2xl p-4'>
                                <div className=' text-[26px] font-bold text-[#0D9488]'>35%</div>
                                <div className='my-2 font-bold'>Restraunt Commission</div>
                                <div className='text-sm text-gray-500'>15% of order value</div>
                            </div>
                            <div className='bg-[#F9FAFB] flex flex-col items-center rounded-2xl p-4'>
                                <div className='text-[26px] font-bold text-[#0D9488]'>20%</div>
                                <div className='my-2 font-bold '>Subscription plans</div>
                                <div className='text-sm text-gray-500'>$9.99/month premium</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Businessplancoststructure />
            </div>
        </div>

    )
}

export default page