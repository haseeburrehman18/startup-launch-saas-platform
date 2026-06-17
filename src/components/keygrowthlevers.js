import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function Keygrowthlevers() {
    return (
        <div className='p-4 bg-[#FAFBFC] rounded-2xl border my-2 text-nowrap'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='rounded-xl p-3 text-white font-bold bg-linear-to-br from-[#2fc7c2] to-[#ffffff]'><GrLocation /></div>
                    <div className='text-[12px] rounded-2xl py-1 px-3 bg-[#f8edea] font-bold text-[#f11d1d]'>High Impact</div>
                </div>
                <div className='font-bold my-3.5'>Geographic Expansion</div>
                <p className='text-sm text-gray-500 font-semibold mb-2'>Expand to new cities with similar demographics</p>
                <div className=''>
                    <h1 className='font-bold text-[15px] text-gray-600'>Action Items:</h1>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineKeyboardArrowRight /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Launch in 2 cities with similar demographics</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineKeyboardArrowRight /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Partner with local restraunts</p>
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <p className='text-[#39af84]'><MdOutlineKeyboardArrowRight /></p>
                        <p className='text-sm text-gray-500 font-semibold'>Hire regional managers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keygrowthlevers