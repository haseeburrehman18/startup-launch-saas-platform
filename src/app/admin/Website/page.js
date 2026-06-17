import React from 'react'
import { LuChevronsLeftRight } from 'react-icons/lu'
import { RiDownloadLine } from 'react-icons/ri'
import Websitestructurestatus from '../../../components/websitestructurestatus'
import Websitemaincomponent from '../../../components/websitemaincomponent'
import { GrDocument } from 'react-icons/gr'

function page() {
    return (
        <div className='p-5 bg-gray-100 min-h-screen'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h1 className='font-bold text-2xl'>Website Structure</h1>
                    <p className='text-sm text-gray-500 my-2 font-semibold'>Al-generated pages and content for your website</p>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-1.5 py-3 px-5 bg-white rounded-2xl font-semibold border'>
                        <p><LuChevronsLeftRight /></p>
                        <p>Export HTML</p>
                    </div>
                    <div className='flex items-center gap-1.5 py-3 px-6 bg-linear-to-br from-[#15ccbd] to-[#17b7d0] text-white font-semibold rounded-2xl border'>
                        <p className='font-bold'><RiDownloadLine /></p>
                        <p>Export to Webflow</p>
                    </div>
                </div>
            </div>
            <div className='my-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <Websitestructurestatus title={"Total Pages"} icon={<GrDocument />} amount={"7"} />
                <Websitestructurestatus title={"Complete"} icon={<GrDocument />} amount={"5"} />
                <Websitestructurestatus title={"In Progress"} icon={<GrDocument />} amount={"2"} />
                <Websitestructurestatus title={"Total Sections"} icon={<GrDocument />} amount={"28"} />
            </div>
            <div>
                <Websitemaincomponent />
            </div>
            <div className='p-4 rounded-2xl my-4 bg-white border'>
                <h1 className='font-bold text-md'>Sample Homepage Copy</h1>
                <div className='bg-[#F9FAFB] rounded-2xl p-4'>
                    <h4 className='py-3 font-bold text-gray-600'>Hero Section</h4>
                    <h1 className='font-bold text-2xl'>Sustainable Food Delivery That Cares for Your Planet</h1>
                    <p className='font-semibold text-sm text-gray-500 my-3'>Order from your favorite local restaurants with zero guilt. Every delivery uses electric vehicles and biodegradable packaging, reducing
                        your carbon footprint by 90%.</p>
                </div>
                <div className='bg-[#F9FAFB] rounded-2xl my-3 p-4'>
                    <h4 className='py-3 font-bold text-gray-600'>Features Section</h4>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='font-bold text-gray-500'>100% Electric Fleet</h3>
                            <p className='text-sm text-gray-500 font-normal'>All deliveries made with zero emissions</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-gray-500'>Eco-Friendly Packaging</h3>
                            <p className='text-sm text-gray-500 font-normal'>Fully compostable containers and utensils</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-gray-500'>Carbon Tracking</h3>
                            <p className='text-sm text-gray-500 font-normal'>See your environmental impact with every order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page