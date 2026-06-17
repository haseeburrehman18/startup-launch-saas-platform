import React from 'react'
import Marketingchannels from '../../../components/marketingchannels'
import { RiDownloadLine } from 'react-icons/ri'
import Ideavalidationcomptitor from '../../../components/ideavalidationcomptitor'
import Marketingcontentcalender from '../../../components/marketingcontentcalender'
import Businessplancoststructure from '../../../components/businessplancoststructure'
import Monthlymarketingbudget from '../../../components/monthlymarketingbudget'
import { PiGoogleChromeLogo, PiInstagramLogoBold } from 'react-icons/pi'
import { BsGoogle } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { MdOutlineContentPasteSearch, MdOutlineMail } from 'react-icons/md'

function page() {
    return (
        <div className='p-5 min-h-screen'>
            <h1 className='font-bold text-2xl'>Marketing Strategy</h1>
            <p className='text-sm text-gray-500 font-semibold my-1'>Complete marketing plan to launch and grow your startup</p>
            <div className='my-3 p-4 rounded-2xl bg-white'>
                <h1 className='font-bold mb-4 '>Recommended Marketing Channels</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Marketingchannels budget={800} desc={"Visual platform perfect for food content"} icon={<PiInstagramLogoBold />} priority={"High"} roi={"4.2"} title={"Instagram"} color={"from-[#ff5bfc]"} />
                    <Marketingchannels budget={1200} desc={"Capture high-intent search traffic"} icon={<BsGoogle/>} priority={"High"} roi={"3.8"} title={"Google Ads"} color={"from-blue-400"} />
                    <Marketingchannels budget={600} desc={"Reach younger eco-conscious audience"} icon={<FaTiktok />} priority={"Medium"} roi={"3.5"} title={"Tiktok"} color={"from-purple-500"} />
                    <Marketingchannels budget={700} desc={"Target local cummunities effectively"} icon={<GrFacebookOption />} priority={"Medium"} roi={"3.2"} title={"Facebook"} color={"from-blue-400"} />
                    <Marketingchannels budget={200} desc={"Highest ROI for retention"} icon={<MdOutlineMail />} priority={"High"} roi={"5.1"} title={"Email Marketing"} color={"from-green-500"} />
                    <Marketingchannels budget={500} desc={"Build authority and SEO"} icon={<MdOutlineContentPasteSearch  />} priority={"Medium"} roi={"2.8"} title={"Content Marketing"} color={"from-orange-500"} />
                </div>
            </div>
            <div className='p-4 rounded-2xl bg-white mt-4'>
                <div className='flex justify-between items-center mb-3'>
                    <h1 className='font-bold'>30-Day Content Calender</h1>
                    <button className='flex items-center rounded-lg gap-2 bg-[#F3F4F6] py-2 px-3'>
                        <p><RiDownloadLine /></p>
                        <p className='text-nowrap'>Export Calender</p>
                    </button>
                </div>
                <div className=''>
                    <div><Marketingcontentcalender /></div>
                </div>
            </div>
            <div>
                <Monthlymarketingbudget />
            </div>
        </div>
    )
}

export default page