import React from 'react'
import { PiInstagramLogoBold } from 'react-icons/pi'

function Marketingchannels({title,desc,budget,priority,roi,icon,color}) {

let colorMap={
    High:{textColor:"text-red-600" ,bgColor:"bg-[#FEF2F2]" },
        Medium:{textColor:"text-orange-600" ,bgColor:"bg-orange-50" },
}
let priorityColor=colorMap[priority] || colorMap.Medium;
    return (
        <div className='p-4 border rounded-2xl bg-[#FBFCFD]'>
            <div className='flex justify-between items-center'>
                <p className={`rounded-lg p-2 bg-linear-to-br ${color}  to-[#f9f7f7] text-white`}>{icon}</p>
                <span className={`px-2.5 py-1 font-semibold  ${priorityColor.textColor} ${priorityColor.bgColor}  text-sm rounded-xl`}>{priority} priority </span>
            </div>
            <h1 className='font-bold my-1.5'>{title}</h1>
            <p className='text-sm text-gray-500 my-2'>{desc}</p>
            <div className='flex justify-between items-center my-1.5'>
                <h1 className='text-sm font-semibold text-gray-500'>Budget:</h1>
                <p className='text-sm font-semibold'>${budget}/month</p>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-sm font-semibold text-gray-500'>Expected ROI:</h1>
                <p className='text-sm text-green-500 font-bold'>{roi}x</p>
            </div>
        </div>
    )
}
export default Marketingchannels