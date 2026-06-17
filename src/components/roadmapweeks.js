import React from 'react'
import { MdOutlineCheckCircle } from 'react-icons/md'
import { RiBarChartLine } from 'react-icons/ri'

function Roadmapweeks() {
    return (
        <div className='p-4 rounded-xl bg-[#FBFCFD] border'>
            <div className='flex items-center gap-3'>
                <div className='rounded-xl py-2 px-4 bg-[#0DB7BE] text-white text-xl'>1</div>
                <div>
                    <h1 className='font-bold'>Week 1</h1>
                    <p className='text-sm text-gray-500 font-semibold'>Launch & Initial Traction</p>
                </div>
            </div>
            <div className='my-3 flex'>
                <div className='w-[50%]'>
                    <h1 className='font-bold text-[15px] text-gray-600'>Goals:</h1>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Process first 100 orders</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Gather initial customer feedback</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Monitor delivery performance</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <h1 className='font-bold text-[15px] text-gray-600'>Success Metrices:</h1>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><RiBarChartLine /></p>
                        <p className='text-sm text-gray-500 font-semibold'>50+ orders/day</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><RiBarChartLine />
                        </p>
                        <p className='text-sm text-gray-500 font-semibold'>4.5+ star rating</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><RiBarChartLine /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Less than 30 min delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmapweeks