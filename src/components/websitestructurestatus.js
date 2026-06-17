import React from 'react'
import { GrDocument } from 'react-icons/gr'

function Websitestructurestatus({title,icon,amount}) {
  return (
    <div className='p-4 bg-white border rounded-4xl py-6'>
        <div className='flex justify-between items-center'>
            <p className='font-semibold text-gray-500'>{title}</p>
                <p className='text-cyan-300-500'>{icon}</p>
        </div>
        <div className='mt-2 font-extrabold text-3xl'>{amount}</div>
    </div>
  )
}

export default Websitestructurestatus