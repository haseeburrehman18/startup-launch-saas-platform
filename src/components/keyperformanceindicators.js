import React from 'react'

function Keyperformanceindicators({title,h1,current1,target1,h2,current2,target2,h3,current3,target3}) {
    return (
        <div className='p-4 bg-[#F9FAFB] rounded-2xl my-2'>
            <div>
                <h1 className='font-bold text-[17px] mb-2 '>{title}</h1>
                <p className='font-semibold text-gray-600 text-[13px]'>{h1}</p>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex gap-1'>
                        <p className='text-[11px] text-gray-500'>Current:</p>
                        <p className='text-[11px] font-bold text-gray-500'>{current1}</p>
                    </div>
                    <div className='flex items-center gap-1 '>
                        <p className='text-[#42ADAD] text-[11px]'>Target:</p>
                        <p className='text-[#42ADAD] font-bold text-[11px]'>{target1}</p>
                    </div>
                </div>
                <p className=' font-semibold text-gray-600 text-[13px]'>{h2}</p>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex gap-1'>
                        <p className='text-[11px] text-gray-500'>Current:</p>
                        <p className='text-[11px] font-bold text-gray-500'>{current2}</p>
                    </div>
                    <div className='flex gap-1'>
                        <p className='text-[#42ADAD] text-[11px]'>Target:</p>
                        <p className='text-[#42ADAD] font-bold text-[11px]'>{target2}</p>
                    </div>
                </div>
                <p className=' font-semibold text-gray-600 text-[13px]'>{h3}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1'>
                        <p className='text-[11px] text-gray-500'>Current:</p>
                        <p className='text-[11px] font-bold text-gray-500'>{current3}</p>
                    </div>
                    <div className='flex gap-1'>
                        <p className='text-[#42ADAD] text-[11px]'>Target:</p>
                        <p className='text-[#42ADAD] font-bold text-[11px]'>{target3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keyperformanceindicators