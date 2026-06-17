import React from 'react'
import { FiCheck } from 'react-icons/fi';
import { TiTickOutline } from "react-icons/ti";
function Overviewcard({icon,status,percentage,description}) {
  return (
    <div className='h-auto w-auto bg-white rounded-2xl p-4'>
        <div className='flex justify-between'>
            <div className='bg-[#0EB7B8] text-white rounded-lg p-2'>
                {icon}
            </div>
            <div className='bg-[#F0FDFA] rounded-full py-0.5 px-2 font-bold text-[#0EB7B8] text-[13px]'>
                {status}
            </div>
    </div>
            <div className='pt-4'>
                <p className='text-2xl font-bold'>{percentage}</p>
                <p className='text-gray-500 font-semibold text-sm'>{description}</p>
            </div>
        </div>
  )
}

export default Overviewcard