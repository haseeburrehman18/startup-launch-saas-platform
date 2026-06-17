import React from 'react'
import { TiTick } from 'react-icons/ti'

function Proplan() {
  return (
        <div className='rounded-2xl border border-gray-200 p-6 text-white bg-[#18202F] shadow-lg'>
            <div className=''>
                <h1 className='text-xl font-bold text-white '>
                    Pro
                </h1>
                <p className='text-gray-400 font-semibold text-sm my-1'>For agencies and serial enterpreneurs</p>
            </div>
            <div className='flex items-center gap-1 mt-3 '>
                <h1 className='text-3xl text-white font-bold'>
                    $149
                </h1>
                <p className='text-sm font-semibold text-gray-500 pt-3.5'>
                    /month
                </p>
            </div>
            <div className='bg-[#F3F4F6] text-black font-bold rounded-lg flex justify-center mx-5 my-8 p-1.5'>
               Upgrade to Pro
            </div>
            <h1 className='font-bold'>Maximize your Productivity:</h1>
            <div className=' text-black font-semibold'>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Unlimited startup ideas
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Advanced AI customization
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Competitive deep-dive analysis
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3 '>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Custom brand guidelines
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Export to Webflow/HTML
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Growth & scaling strategies
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Priority support
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />Team colaborations (5 seats)
                </div>
                <div className='flex text-sm text-gray-400 ml-2 my-3'>
                    <TiTick className='text-green-400 pt-1 font-bold text-lg mr-3' />API access     
                </div>
            </div>



        </div>
  )
}

export default Proplan