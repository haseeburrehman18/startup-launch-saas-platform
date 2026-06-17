import React from 'react'

function Fiancial_pricingstrategy({title,fee_rate,amount,service_premium,amount_2,premium_subscription,amount_3,average
    ,amount_of_avg
}) {
    return (
        <div className='p-5 bg-[#f4f7f9] rounded-xl'>
            <h1 className='font-bold text-sm mb-3'>{title}</h1>
            <div className='grid sm:grid-rows-4 gap-3'>
                <div className='p-3 bg-[#FFFFFF] flex justify-between items-center rounded-lg'>
                    <p className='font-semibold text-gray-500'>{fee_rate}</p>
                    <p className='font-bold'>{amount}</p>
                </div>
                <div className='p-3 bg-[#FFFFFF] flex justify-between items-center rounded-lg'>
                    <p className='font-semibold text-gray-500'>{service_premium}</p>
                    <p className='font-bold'>{amount_2}</p>
                </div>
                <div className='p-3 bg-[#FFFFFF] flex justify-between items-center rounded-lg'>
                    <p className='font-semibold text-gray-500'>{premium_subscription}</p>
                    <p className='font-bold'>{amount_3}</p>
                </div>
                <div className='p-3 bg-[#F0FDFA] border border-[#BEF9ED] flex justify-between rounded-lg items-center'>
                    <p className='text-[#3F9FA9] font-bold'>{average}</p>
                    <p className='text-[#2d8d98] font-bold'>{amount_of_avg}</p>
                </div>
            </div>
        </div>
    )
}


export default Fiancial_pricingstrategy