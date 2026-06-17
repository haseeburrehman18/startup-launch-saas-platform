import React from 'react'
import { FaCalculator } from 'react-icons/fa'

function Businessplancoststructure() {
  return (
                <div className='p-5 rounded-xl bg-white mt-4'>
                    <div className='flex gap-2'>
                        <div className='p-3 text-white rounded-xl bg-linear-to-br from-[#ff0707] to-[#ffac2f]'>
                            <FaCalculator />
                        </div>
                        <div className='text-2xl font-bold '>Cost Structure</div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='text-gray-900 font-semibold text-sm mt-2.5'>
                                    Technology & Platform
                                </h1>
                                <h1 className='text-gray-500 text-sm font-semibold mt-2.5'>
                                    $15000                            </h1>
                            </div>
                            <div className='w-full mt-2'>
                                <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                    <div className='h-2 w-1/2 rounded-2xl bg-[#0DB7BC]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='text-gray-900 font-semibold text-sm mt-2.5'>
                                    Marketing & Customer Acquisition
                                </h1>
                                <h1 className='text-gray-500 text-sm font-semibold mt-2.5'>
                                    $22,500

                                </h1>
                            </div>
                            <div className='w-full mt-2'>
                                <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                    <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='text-gray-900 font-semibold text-sm mt-2.5'>
                                    Operations & Logistics
                                </h1>
                                <h1 className='text-gray-500 text-sm font-semibold mt-2.5'>
                                    $18,750

                                </h1>
                            </div>
                            <div className='w-full mt-2'>
                                <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                    <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='text-gray-900 font-semibold text-sm mt-2.5'>
                                    Packaging & Supplies
                                </h1>
                                <h1 className='text-gray-500 text-sm font-semibold mt-2.5'>
                                    $11,250

                                </h1>
                            </div>
                            <div className='w-full mt-2'>
                                <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                    <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='text-gray-900 font-semibold text-sm mt-2.5'>
                                    Administrative & Legal
                                </h1>
                                <h1 className='text-gray-500 text-sm font-semibold mt-2.5'>
                                    $7,500
                                </h1>
                            </div>
                            <div className='w-full mt-2'>
                                <div className='w-full h-2 bg-gray-200 rounded-2xl'>
                                    <div className='h-2 rounded-2xl bg-[#0DB7BC]'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  )
}

export default Businessplancoststructure