import React from 'react'
import Growthyears from '../../../components/growthyears'
import Keygrowthlevers from '../../../components/keygrowthlevers'
import Keyperformanceindicators from '../../../components/keyperformanceindicators'
import Riskmitigationstrategies from '../../../components/riskmitigationstrategies'
import Scalingbyphases from '../../../components/scalingbyphases'

function page() {
  return (
    <div className='p-5 bg-gray-100 min-h-screen'>
      <div className='rounded-2xl border-2 bg-[#FBF4FD] p-5 my-5 border-[#EDDCFF]'>
        <h1 className='font-bold text-xl my-2'>3-Year Growth Trajectory</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          <Growthyears yearname={"Year 1"} revenueamnt={"$125K"} tcustomers={"2,500"} tcities={1} />
          <Growthyears yearname={"Year 2"} revenueamnt={"$480K"} tcustomers={"12,000"} tcities={3} />
          <Growthyears yearname={"Year 3"} revenueamnt={"$1.2M"} tcustomers={"35,000"} tcities={8} />
        </div>
      </div>
      <div className='rounded-2xl border-2 bg-white p-5 my-5'>
        <h1 className='font-bold text-xl my-2'>Key Growth Levers</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <Keygrowthlevers />
          <Keygrowthlevers />
          <Keygrowthlevers />
          <Keygrowthlevers />
          <Keygrowthlevers />
          <Keygrowthlevers />
        </div>
      </div>
      <div className='rounded-2xl border-2 bg-white p-5 my-5'>
        <h1 className='font-bold text-xl my-2'>Key Performance Indicators(KPIs)</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          <Keyperformanceindicators title={"Growth Metrics"} h1={"Monthly Active Users"} current1={"2,500"} target1={"15% MoM growth"} h2={"New Customer Acquisition"} current2={"320"} target2={"500/month"} h3={"Market Share"} current3={"1.2%"} target3={"5% in Year 1"}/>
          <Keyperformanceindicators title={"Financial Metrics"} h1={"Monthly Revenue"} current1={"$12K"} target1={"$50K by Month 6"} h2={"Customr Lifetime Value"} current2={"$280"} target2={"$450"} h3={"Customer Acquisition Cost"} current3={"$42"} target3={"<$35"}/>
          <Keyperformanceindicators title={"Operational Metrics"} h1={"Average Delivery Time"} current1={"28 min"} target1={"<25 minutes"} h2={"Order Accuracy"} current2={"96%"} target2={">98%"} h3={"Customer Satisfaction"} current3={"4.5"} target3={"4.7 + stars"}/>
        </div>
      </div>
      <div className='rounded-2xl border-2 bg-white p-5 my-5'>
        <h1 className='font-bold text-xl my-2'> Scaling Strategy by Phase</h1>
        <div className='grid sm:grid-cols-1 md:grid-rows-2 lg:grid-rows-4 gap-3'>
          <Scalingbyphases phase={"Phase 1: Foundation (Months 1-6)"} description={"Prove concept in initial market"} investmentprice={"$75K"} t1={"Achieve prodect market-fit"} t2={"Build core team (10-15 people)"} t3={"Establish operational processes"} t4={"Reach 100 orders/day"}/>
          <Scalingbyphases phase={"Phase 2: Local Dominance (Months 7-12)"} description={"Become #1 in launch city"} investmentprice={"$150K"} t1={"Capture 10% local market share"} t2={"Partner with 100+ restraunts"} t3={"Scale to 500 orders/day"} t4={"Acheive operational profitability"}/>
          <Scalingbyphases phase={"Phase 3: Regional Expansion (Year 2)"} description={"Launch in 2-3 nearby cities"} investmentprice={"$400K"} t1={"Replicate success in new markets"} t2={"Build regional brand awareness"} t3={"Grow team to 50+ people"} t4={"Reach $500K annual revenue"}/>
          <Scalingbyphases phase={"Phase 4: National Growth (Year 3)"} description={"Expand to 8+ major cities"} investmentprice={"$1.5M"} t1={"Establish national presence"} t2={"Secure Series A Funding"} t3={"Build technology platform"} t4={"Reach $1.2M annual revenue"}/>
        </div>
      </div>
      <div className='rounded-2xl border-2 bg-white p-5 my-5'>
        <h1 className='font-bold text-xl my-2'>Risk Mitigation Strategies</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          <Riskmitigationstrategies />
          <Riskmitigationstrategies />
          <Riskmitigationstrategies />
          <Riskmitigationstrategies />
        </div>
      </div>
    </div>
  )
}

export default page