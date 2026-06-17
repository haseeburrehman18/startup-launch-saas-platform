import React from 'react'
import { TiTick } from 'react-icons/ti'

function Freeplan() {
    return (
        <div className='rounded-2xl border border-gray-200 p-6 bg-white shadow-lg'>
            <div className=''>
                <h1 className='text-xl font-bold text-black '>
                    Free
                </h1>
                <p className='text-gray-500 font-semibold text-sm my-1'>Perfect for exploring the platform</p>
            </div>
            <div className='flex items-center gap-1 mt-3 '>
                <h1 className='text-3xl text-black font-bold'>
                    $0
                </h1>
                <p className='text-sm font-semibold text-gray-500 pt-3.5'>
                    /month
                </p>
            </div>
            <div className='bg-[#F3F4F6] font-bold rounded-lg flex justify-center mx-5 my-8 p-1.5'>
               Get Started Free
            </div>
            <h1 className='font-bold'>What's included:</h1>
            <div className=' text-black font-semibold'>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />1 Startup idea generation
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Basic validation report
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Simple business plan outline
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3 '>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Brand name suggessions
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Community support
                </div>
            </div>



        </div>
    )
}

export default Freeplan