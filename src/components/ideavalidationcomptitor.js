import React from 'react'

function Ideavalidationcomptitor() {
  return (
    <div className='overflow-scroll'>
      <table className='min-w-full text-left text-[#394157]'>
        <thead>
          <tr className=''>
            <th className=' p-3'>Competitor</th>
            <th className=' p-3'>Market Share</th>
            <th className=' p-3'>Strengths</th>
            <th className=' p-3'>Weaknesses</th>
            <th className=' p-3'>Threat Level</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-gray-500'>
            <td className='p-3  text-black font-semibold'>GreenEats</td>
            <td className='p-3 '>15%</td>
            <td className='p-3 '>Established brand, wide coverage</td>
            <td className='p-3 '>Higher prices, limited eco-focus</td>
            <td className='p-3 '>
              <span className='px-2 font-semibold rounded-xl text-orange-700 bg-[#FFF7ED]'>
                Medium
              </span>
              </td>
          </tr>
          <tr className='text-gray-500'>
            <td className='p-3  text-black font-semibold'>Ecomeals</td>
            <td className='p-3 '>8%</td>
            <td className='p-3 '>Strong sustainability message</td>
            <td className='p-3 '>Small delivery area, slow service</td>
            <td className='p-3 '>
              <span className='px-2 font-semibold rounded-xl text-green-700 bg-[#F0FDF4]'>
                Low
              </span>
              </td>
          </tr>
          <tr className='text-gray-500'>
            <td className='p-3  text-black font-semibold'>QuickBite</td>
            <td className='p-3 '>22%</td>
            <td className='p-3 '>Fast delivery, low prices</td>
            <td className='p-3 '>No sustainability focus</td>
            <td className='p-3 '>
              <span className='px-2 font-semibold rounded-xl text-orange-700 bg-[#FFF7ED]'>
                High
              </span>
              </td>
          </tr>
          <hr className='text-gray-500'/>
          <tr className='text-gray-500'>
            <td className='p-3  text-black font-semibold'>FreshDirect</td>
            <td className='p-3 '>12%</td>
            <td className='p-3 '>Quality food, reliable</td>
            <td className='p-3 '>Traditional packiging</td>
            <td className='p-3 '>
              <span className='px-2 font-semibold rounded-xl text-orange-700 bg-[#FFF7ED]'>
                Medium
              </span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Ideavalidationcomptitor