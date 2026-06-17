import React from 'react'
import { RiEditLine, RiEyeLine, RiFileCopyLine } from 'react-icons/ri'

function Websitemaincomponent() {
  return (
    <div className='rounded-4xl border bg-white'>
        <div className='flex gap-2'>
            <div className='w-[30%]'>
                <img src={"/pic.png"}></img>
            </div>
            <div className='w-[70%] p-5 ml-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-xl'>Homepage</h1>
                    <div className='flex gap-2'>
                        <p className='p-3 rounded-lg bg-[#F3F4F6]'><RiEyeLine /></p>
                        <p className='p-3 rounded-lg bg-[#F3F4F6]'><RiEditLine /></p>
                    </div>
                </div>
                <span className='text-[#6AA874] bg-[#F0FDF4] rounded-xl py-1 my-1 mb-3 px-2.5 font-bold'>Complete</span>
                <div className='text-gray-600 font-semibold my-1'>Sections:</div>
                <div className='flex sm:flex-row gap-2 items-center my-3 '>
                <div className='text-[#74dbcc] bg-[#F0FDF4] rounded-xl py-1 mb-1 px-2.5 font-bold'>Hero</div>
                <div className='text-[#74dbcc] bg-[#F0FDF4] rounded-xl py-1 mb-1 px-2.5 font-bold'>Features</div>
                <div className='text-[#74dbcc] bg-[#F0FDF4] rounded-xl py-1 mb-1 px-2.5 font-bold'>How it Works</div>
                <div className='text-[#74dbcc] bg-[#F0FDF4] rounded-xl py-1 mb-1 px-2.5 font-bold'>Testimonals</div>
                <div className='text-[#74dbcc] bg-[#F0FDF4] rounded-xl py-1 mb-1 px-2.5 font-bold'>Testimonals</div>
                <div className='text-[#74dbcc] bg-[#F0FDF4]  py-1 mb-1 px-2.5 font-bold'>CTA</div>
                </div>
                <div className='flex items-center gap-2 h-auto'>
                    <div className='flex items-center gap-1.5 py-3 px-6 bg-linear-to-br from-[#15ccbd] to-[#17b7d0] text-white font-semibold rounded-lg border'>
                        <p className='font-bold'><RiEyeLine /></p>
                        <p className='font-semibold'>Preview Page</p>
                    </div>
                    <div className='flex items-center gap-1.5 py-3 px-6 bg-[#F3F4F6] font-semibold rounded-lg border'>
                        <p className='font-bold'><RiFileCopyLine /></p>
                        <p className='font-semibold'>Copy Content</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Websitemaincomponent