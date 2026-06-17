import React from 'react'
import { MdOutlineCheckCircle } from 'react-icons/md'
import { RiBarChartLine } from 'react-icons/ri'

function Scalingbyphases({phase,description,investmentprice,t1,t2,t3,t4}) {
  return (
    <div className='p-4 rounded-2xl bg-[#EEFEFD] border border-[#cff7f4] mt-2'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold '>{phase}</h1>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
        <div className='rounded-lg bg-white p-2 flex flex-col items-center shadow'>
          <p className='text-sm text-gray-500'>Investment</p>
          <p className='font-bold text-[#12958A]'>{investmentprice}</p>
        </div>
      </div>
      <h1 className='font-bold text-[15px] mt-2.5 text-gray-600'>Key Objectives:</h1>
      <div className='flex items-center'>
        <div className='w-[50%]'>
          <div className='flex items-center gap-2 my-2'>
            <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
            <p className='text-sm text-gray-500 font-semibold'>{t1}</p>
          </div>
          <div className='flex items-center gap-2 my-2'>
            <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
            <p className='text-sm text-gray-500 font-semibold'>{t2}</p>
          </div>
        </div>
        <div className='w-[50%]'>
          <div className='flex items-center gap-2 my-2'>
            <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
            <p className='text-sm text-gray-500 font-semibold'>{t3}</p>
          </div>
          <div className='flex items-center gap-2 my-2'>
            <p className='text-[#39af84]'><MdOutlineCheckCircle /></p>
            <p className='text-sm text-gray-500 font-semibold'>{t4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scalingbyphases