import React from 'react'
import { MdOutlineMonetizationOn } from 'react-icons/md'

function Financial_invest_time_yearrev({title,description,icon,color}) {
  return (
    <div className='bg-white rounded-2xl p-5 border '>
          <button className={`text-white rounded-lg p-2 bg-linear-to-br from-[${color}] to-[#ebf8fa]` }>{icon}</button>
        <h1 className='text-lg font-bold my-2'>{title}</h1>
        <p className='text-sm text-gray-500 font-semibold'>{description}</p>
    </div>
  )
}

export default Financial_invest_time_yearrev