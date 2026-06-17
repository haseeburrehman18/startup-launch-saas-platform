import React from 'react'
import Freeplan from '../../../components/freeplan'
import Starterplan from '../../../components/starterplan'
import Proplan from '../../../components/proplan'

function page() {
    return (
        <div>
            <div className='p-15 '>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='font-bold text-[34px]'>Simple, Transparent Pricing</h1>
                    <p className='text-sm text-gray-500 font-semibold '>Choose the plan that fits your startup journey. No hidden fees, cancel anytime.</p>
                </div>
                <div className='mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Freeplan/>
                    <Starterplan/>
                    <Proplan/>
                </div>
                <h1 className='flex justify-center items-center font-bold  text-[24px] my-10'>Frequently Asked Questions</h1>
                <div className='grid grid-rows-5 gap-5 justify-center mb-10'>
                    <div className='rounded-lg p-4 bg-[#ebf0f5]'>
                        <h1 className='font-bold'>Can i switch plans anytime?</h1>
                        <p className='font-semibold text-gray-500 text-sm mt-1.5'>Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.</p>
                    </div>
                    <div className='rounded-lg p-4 bg-[#ebf0f5]'>
                        <h1 className='font-bold'>Is there a free trial?</h1>
                        <p className='font-semibold text-gray-500 text-sm mt-1.5'>Yes, both Starter and Pro plans come with a 14-day free trial. No credit card required.</p>
                    </div>
                    <div className='rounded-lg p-4 bg-[#ebf0f5]'>
                        <h1 className='font-bold'>What payment method do you accept?</h1>
                        <p className='font-semibold text-gray-500 text-sm mt-1.5'>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
                    </div>
                    <div className='rounded-lg p-4 bg-[#ebf0f5]'>
                        <h1 className='font-bold'>Can i get a refund?</h1>
                        <p className='font-semibold text-gray-500 text-sm mt-1.5'>Yes, we offer a 30-day money-back guarantee if you're not satisfied with the platform.</p>
                    </div>
                    <div className='rounded-lg p-4 bg-[#ebf0f5]'>
                        <h1 className='font-bold'>Do you offers discount for annual plans?</h1>
                        <p className='font-semibold text-gray-500 text-sm mt-1.5'>Yes! Save 20% when you pay annually. Contact us for custom enterprise pricing.</p>
                    </div>
                </div>
            </div>
            <div className='py-15 flex flex-col gap-2 justify-center items-center bg-linear-to-r from-[#15ccbd] to-[#17b7d0] w-full text-white'>
                <h1 className='font-bold text-[22px]'>Ready To Build Your Startup?</h1>
                <p className='text-sm text-white opacity-70 font-semibold '>Join thousands of founders who have turned their ideas into successful businesses</p>
                <button className='px-5 py-2 rounded-lg bg-white font-semibold text-[#21A09B] text-md mt-5 shadow-lg'>Start Free Trial</button>
            </div>
            


        </div>
    )
}

export default page 