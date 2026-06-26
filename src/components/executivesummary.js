import React from 'react'
import { GrDocumentText } from 'react-icons/gr'

function Executivesummary() {
  return (
    <div className='p-5 rounded-xl bg-white mt-7'>
      <div className='flex gap-2'>
        <div className='p-3 text-white rounded-xl bg-linear-to-br from-[#15ccbd] to-[#17b7d0]'>
          <GrDocumentText />
        </div>
        <div className='text-2xl font-bold '>Executive Summary</div>
      </div>
      <div className='flex flex-col gap-3 text-gray-500 font-semibold '>
        <p className='pt-3'>
          EcoDelivery is a sustainable food delivery platform that connects environmentally conscious consumers with local restaurants through a
          network of electric vehicles and biodegradable packaging solutions. Our mission is to revolutionize the food delivery industry by making
          sustainability the default choice, not a premium option.
        </p>
        <p>
          The global food delivery market is projected to reach $320 billion by 2029, with sustainability becoming a key differentiator. EcoDelivery
          addresses the growing demand for eco-friendly delivery options while helping restaurants reduce their environmental footprint.
        </p>
        <p>
          With an initial investment of $75,000, we project reaching profitability within 18 months and generating $1.2M in annual revenue by year
          three. Our competitive advantage lies in our proprietary carbon-tracking technology and strategic partnerships with local sustainable
          suppliers.
        </p>
      </div>
    </div>
  )
}
export default Executivesummary