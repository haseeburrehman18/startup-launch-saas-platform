import React from 'react'
import { BiLineChart } from 'react-icons/bi'
import { MdOutlineArrowUpward } from 'react-icons/md'
import { RiGroupLine } from 'react-icons/ri'

function Ideavalidation() {
    return (
        <div className='p-5'>
            <div className='p-5 border-3 border-[#BDF9EE] rounded-2xl bg-[#EEFDFC] flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Validation Verdict</h1>
                    <p className='text-gray-500 text-[13px] pb-3'>Your startup idea shows strong market potential</p>
                    <div className='flex gap-3'>
                        <button className='px-3 py-1 bg-[#14B8A6] rounded-full text-xs sm:text-sm whitespace-nowrap  text-[#F5FFFF] font-semibold'>High potential</button>
                        <p className='text-2xl font-bold text-[#0D9488]'>92/100</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-center items-center rounded-full sm:h-25 sm:w-25 h-15 w-15 bg-white shadow-lg'>
                        <div className='text-2xl sm:text-3xl text-[#0D9488] font-bold'>A+</div>
                        <div className='text-gray-500 text-xs sm:text-sm'>Score</div>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-2xl bg-white my-5'>
                <h1 className='text-lg font-bold mb-4'>Market Demand Summary</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='rounded-xl bg-gray-50 flex flex-col items-center justify-center'>
                        <div className='rounded-full w-12 h-12 my-4.5 bg-[#1DC075] flex justify-center items-center text-2xl text-white'><MdOutlineArrowUpward /></div>
                        <p className='text-[21px] font-bold'>$2.4B</p>
                        <p className='text-gray-500 text-[12px] py-1.5 mb-4'>Total Market Size</p>
                    </div>
                    <div className='rounded-xl bg-gray-50 flex flex-col items-center justify-center'>
                        <div className='rounded-full w-12 h-12 my-4.5 bg-[#10B7B1] flex justify-center items-center text-2xl text-white'><BiLineChart /></div>
                        <p className='text-[21px] font-bold'>18.5%</p>
                        <p className='text-gray-500 text-[12px] py-1.5 mb-4'>Annual Growth Rate</p>
                    </div>
                    <div className='rounded-xl bg-gray-50 flex flex-col items-center justify-center'>
                        <div className='rounded-full w-12 h-12 my-4.5 bg-[#DA4BB1] flex justify-center items-center text-2xl text-white'><RiGroupLine /></div>
                        <p className='text-[21px] font-bold'>3.2M</p>
                        <p className='text-gray-500 text-[12px] py-1.5 mb-4'>Target Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ideavalidation