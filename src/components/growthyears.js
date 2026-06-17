import React from 'react'

function Growthyears({yearname,revenueamnt,tcustomers,tcities}) {
  return (
    <div className='rounded-2xl my-3 bg-white p-5 shadow-lg'>
        <div>
            <h1 className='font-bold mt-1 mb-4'>{yearname}</h1>
            <p className='my-1 text-gray-500 font-semibold text-sm'>Revenue</p>
            <p className='mt-1 mb-2 text-2xl font-bold text-[#9836EA]'>{revenueamnt}</p>
            <p className='text-gray-500 font-semibold text-sm'>Customers</p>
            <p className='text-lg font-bold'>{tcustomers}</p>
            <p className='text-gray-500 font-semibold text-sm mt-2'>Cities</p>
            <p className='font-bold'>{tcities}</p>
        </div>
    </div>
  )
}

export default Growthyears