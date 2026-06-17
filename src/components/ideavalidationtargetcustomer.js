import React from 'react'
import { GoPerson } from 'react-icons/go'

function Targetcustomer({title,s_age,e_age,s_budget,e_budget,trait,painpointdescription}) {
    return (
        <div className=''>
            <div className='mt-4 p-5 rounded-2xl bg-[#FBFCFC] border border-gray-100 flex flex-col gap-3'>
                <div className='rounded-full w-14 h-14 bg-[#10B7B1] flex justify-center items-center text-white text-xl font-bold'><GoPerson /></div>
                <div className='text-[17px] font-bold'>
                    {title}
                </div>
                <div className='flex gap-3 items-center text-sm text-gray-600'>
                    <p>Age: {s_age}-{e_age}</p>
                    <p className='font-extrabold'>.</p>
                    <p>{s_budget}-{e_budget}</p>
                </div>
                <div className='font-semibold text-[13px] text-gray-700'>Key Traits:</div>
                <div className='flex gap-4 flex-wrap'>
                    {trait.map((item,idx)=>(
                                             <span className='text-[12px] rounded-xl font-semibold py-0.5 px-1.5 bg-[#F0FDFA] text-[#3B8E88]'>{item}</span>

                    ))}
                </div>
                <div className='bg-gray-200'><hr/></div>
                <div>
                    <p className='text-[14px] text-gray-700 font-semibold'>Pain Point:</p>
                    <p className='text-[13.5px] text-gray-600'>{painpointdescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Targetcustomer