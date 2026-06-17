import { title } from 'process'
import React from 'react'

function Financial_breakevenanalysis({title,tech_delivery,amount_1,marketing_pakaging,amount_2,operations_payment,amount_3,administrative_insurance,amount_4,total,total_amount}) {
    return (
        <div className='p-5 bg-[#EEFDFC] rounded-xl border border-[#c0f4ec]'>
            <h1 className='font-bold text-sm mb-3'>{title}</h1>
            <div className='flex flex-col gap-3'>
                <div className=' flex justify-between items-center'>
                    <p className='font-semibold text-gray-500'>{tech_delivery}</p>
                    <p className='font-bold'>${amount_1}</p>
                </div>
                <div className=' flex justify-between items-center'>
                    <p className='font-semibold text-gray-500'>{marketing_pakaging}</p>
                    <p className='font-bold'>${amount_2}</p>
                </div>
                <div className=' flex justify-between items-center'>
                    <p className='font-semibold text-gray-500'>{operations_payment}</p>
                    <p className='font-bold'>${amount_3}</p>
                </div>
                <div className=' flex justify-between items-center'>
                    <p className='font-semibold text-gray-500'>{administrative_insurance}</p>
                    <p className='font-bold'>${amount_4}</p>
                </div>
                <hr className='text-[#50e6d0]' />
                <div className='flex justify-between rounded-lg items-center'>
                    <p className='font-bold'>{total}</p>
                    <p className='text-[#2d8d98] font-bold'>{total_amount}</p>
                </div>
            </div>
        </div>)
}

export default Financial_breakevenanalysis