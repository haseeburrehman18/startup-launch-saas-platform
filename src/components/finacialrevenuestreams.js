import React from 'react'
import { GrDeliver } from 'react-icons/gr'

function Finacialrevenuestreams({icon,title,percentprogress,price,avg_order}) {
    return (
        <div className='shadow-xs border border-[#ecf8f8] p-5 bg-[#FCFCFD] rounded-xl'>
            <button className='text-white rounded-xl p-3 bg-linear-to-br from-[#0da779] to-[#53ccdf]'>{icon}</button>
            <h1 className='text-md font-bold my-2'>{title}</h1>
            <p className='text-2xl text-[#199A8F] mb-1 font-bold'>{percentprogress}</p>
            <p className='text-xl font-bold mb-2'>{price}</p>
            <p className='text-sm text-gray-500 font-semibold'>{avg_order}</p>
        </div>
    )
}

export default Finacialrevenuestreams