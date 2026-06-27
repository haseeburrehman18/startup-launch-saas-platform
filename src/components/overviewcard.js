import React from 'react'
import { FiCheck } from 'react-icons/fi';
import { TiTickOutline } from "react-icons/ti";
function Overviewcard({icon,status,percentage,description,bgcolor,color}) {
  return (
    <div className='h-auto w-auto bg-white rounded-2xl shadow-lg p-4'>
        <div className='flex justify-between'>
            <div className={`bg-linear-to-br from-[#15ccbd] to-[#17b7d0] text-white rounded-xl p-3 ${bgcolor}`}>
                {icon}
            </div>
            <div className={`bg-[#F0FDFA] rounded-full py-0.5 px-2 font-semibold text-[#0EB7B8] text-[13px] ${color}`}>
                {status}
            </div>  
    </div>
            <div className='pt-4'>
                <p className='text-2xl font-bold'>{percentage}</p>
                <p className='text-gray-500 font-semibold py-1 text-sm'>{description}</p>
            </div>
        </div>
  )
}

export default Overviewcard