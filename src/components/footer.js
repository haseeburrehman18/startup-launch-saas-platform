import React from 'react'

function Footer() {
    return (
        <div className='w-full pt-15 pb-6 px-15 bg-[#111827] text-white justify-between '>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3'>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='w-1/7' src={"/images/l.png"}></img>
                        <h1 className='font-bold'>Solve Sphere</h1>

                    </div>
                    <p className='text-gray-500 text-sm font-semibold my-1.5'>Al-powered platform to build your entire
                        startup from just an idea.</p>
                </div>
                <div>
                    <h1 className='font-bold'>Product</h1>
                    <p className='text-sm text-gray-500 font-semibold mt-2'>Features</p>
                    <p className='text-sm text-gray-500 font-semibold my-2'>Pricing</p>
                    <p className='text-sm text-gray-500 font-semibold'>FAQ</p>
                </div>
                <div>
                    <h1 className='font-bold'>Company</h1>
                    <p className='text-sm text-gray-500 font-semibold mt-2'>About</p>
                    <p className='text-sm text-gray-500 font-semibold my-2'>Blog</p>
                    <p className='text-sm text-gray-500 font-semibold'>Contact</p>
                </div>
                <div>
                    <h1 className='font-bold'>Legal</h1>
                    <p className='text-sm text-gray-500 font-semibold my-2'>Privacy</p>
                    <p className='text-sm text-gray-500 font-semibold'>Terms</p>

                </div>
            </div>
            <hr className='bg-gray-50/20 opacity-20 my-7' />
            <p className='text-sm  text-gray-500 font-semibold flex items-center justify-center'>2026 StartupAl , All rights reserved. Powered by Haseeb ur rehman</p>
        </div>)
}

export default Footer