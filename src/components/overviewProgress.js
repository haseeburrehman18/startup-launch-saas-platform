import React from 'react'

function OverviewProgress({name,per}) {


  return (
    <div>
                        <div className='flex justify-between pt-2'>
                            <h1 className='text-gray-500 text-sm mt-2.5'>
                                {name}
                            </h1>
                            <h1 className='text-black text-sm font-semibold mt-2.5'>
                                {per}%
                            </h1>
                        </div>
                        <div className='w-full mt-2'>
                            <div className=' h-2 bg-gray-200 rounded-2xl' style={{width:`${per}%`}}>
                                <div className={`h-2 rounded-2xl ${per<=33 ?"bg-[#ed1b1b]" : per>33 && per<=66 ?"bg-[#da5b25]":"bg-[#0DB7BC]"}`}>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default OverviewProgress