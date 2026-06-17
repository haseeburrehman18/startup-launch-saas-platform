import React from 'react'
import { TiTick } from 'react-icons/ti'

function Starterplan() {
  return (
    <div className='relative'>
        <div>
        <span className='rounded-2xl bg-[#14B8A6] top-[-13] ml-[175] flex items-center justify-center py-1 px-5 text-white absolute'>Most Popular</span>
        </div>  
        <div className='rounded-2xl border-2 border-[#2CBFAF] p-6 bg-white shadow-lg '>
            <div className=''>
                <h1 className='text-xl font-bold text-black '>
                    Starter
                </h1>
                <p className='text-gray-500 font-semibold text-sm my-1'>For serious founders ready to launch</p>
            </div>
            <div className='flex items-center gap-1 mt-3 '>
                <h1 className='text-3xl text-black font-bold'>
                    $49
                </h1>
                <p className='text-sm font-semibold text-gray-500 pt-3.5'>
                    /month
                </p>
            </div>
            <div className='bg-[#08B6CE] font-bold rounded-lg text-white flex justify-center mx-5 my-8 p-1.5'>
               Upgrade to Plus
            </div>
            <h1 className='font-bold'>Unlock the Full Experience:</h1>
            <div className=' text-black font-semibold'>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />5 Startup idea generation
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Complete validation & market research
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Full business plan with Financials
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3 '>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Brand identity & Logo Design
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Website Structure & Copy
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Marketing Starategy
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Launch Roadmap
                </div>
                <div className='flex text-sm text-gray-500 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Email Support
                </div>
            </div>



        </div>
    </div>
  )
}

export default Starterplan