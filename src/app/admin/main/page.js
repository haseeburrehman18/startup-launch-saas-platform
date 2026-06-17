import React from 'react'
import { BiLineChart } from 'react-icons/bi'
import { FaRegClock } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { Input } from "@/components/ui/input"
import { GrDocumentText } from 'react-icons/gr'
import { MdOutlineArrowForward, MdOutlineColorLens } from 'react-icons/md'
import { RiLayoutLine, RiRocketLine, RiTeamLine } from 'react-icons/ri'
import { TbSpeakerphone } from 'react-icons/tb'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function page() {
    return (
        <div className='min-h-screen'>
            <div className='flex'>
                <div className='p-5 w-[40%] bg-linear-to-br from-[#2A1B58] to-[#7c3cb0] min-h-screen '>
                    <h1 className='text-3xl text-white font-bold mt-5'>
                        What happens next?
                    </h1>
                    <p className='text-gray-400 text-sm mt-3 font-semibold'>Our Al will analyze your idea and generate everything
                        you need to launch your startup.</p>
                    <div className='flex'>
                        <div className='flex flex-col gap-3 ml-5 pt-9 w-[9%]'>
                            <p className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <FiSearch />
                            </p>
                            <div className='bg-[#493272] p-3 rounded-lg w-10  text-[#25d2be] text-md font-bold'>
                                <GrDocumentText />
                            </div>
                            <div className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <MdOutlineColorLens />
                            </div>
                            <div className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <BiLineChart />
                            </div>
                            <div className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <RiLayoutLine />
                            </div>
                            <div className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <TbSpeakerphone />
                            </div>
                            <div className='bg-[#493272] p-3 rounded-lg w-10 text-[#25d2be] text-md font-bold'>
                                <RiRocketLine />
                            </div>
                        </div>
                        <div className='w-[91%] flex flex-col gap-2.5 ml-2 text-white pt-9'>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold text-white'>Market Research</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Validate demand and analyze competitors</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold text-white'>Business Plan</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Complete strategy and Revenue</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Brand Identity</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Set up pre-launch checklist</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Financial Plan</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Set up pre-launch checklist</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Website Structure</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Set up pre-launch checklist</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Marketing Strategy</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Assign responsibilities</div>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>Launch Roadmap</p>
                                    <button className='text-gray-400 text-sm'></button>
                                </div>
                                <div className='text-[12px] text-gray-400 font-semibold'>Assign responsibilities</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center mt-100'>
                        <div className='text-[#25d2be]'><FaRegClock /></div>
                        <div className='text-gray-400 font-semibold text-sm'>Estimated time: 2-3 minutes</div>
                    </div>
                </div>
                <div className='p-5 mt-4 w-[60%] min-h-screen'>
                    <h1 className='font-bold text-3xl'>Tell Us About your Startup Idea</h1>
                    <p className='text-sm font-semibold text-gray-500 mt-3'>Share your vision and we'll help you build a complete business plan</p>
                    <div className='bg-white rounded-2xl p-4'>
                        <div className='font-bold '>Startup Idea Name</div>
                        <div className='mt-1'>
                            <Input className="h-6 bg-gray-100 rounded-4xl flex items-center font-semibold " type='text' placeholder='e.g., EcoDelivery - Sustainable Food Delivery' />
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-4 my-4'>
                        <div className='font-bold '>Idea Description</div>
                        <div className='mt-1'>
                            <Input className="h-25 bg-gray-50 rounded-xl font-semibold " type='text' placeholder='Describe your startup idea, the problem it solves, and who it helps...' />
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-4 my-4'>
                        <div className='font-bold '>Industry</div>
                        <div className='mt-1'>
                            <Select>
                                <SelectTrigger className=" rounded-2xl w-full max-w-48">
                                    <SelectValue className='font-bold' placeholder="Select an industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-4 my-4'>
                        <div className='font-bold '>Target Market</div>
                        <div className='mt-1'>
                            <Input className="h-25 bg-gray-50 rounded-xl font-semibold " type='text' placeholder='Describe your startup idea, the problem it solves, and who it helps...' />
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-4 my-4'>
                        <div className='font-bold '>Budget Range</div>
                        <div className='mt-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold'>
                            <div className='rounded-2xl bg-white border p-7 flex items-center justify-center'>Under $10k</div>
                            <div className='rounded-2xl bg-white border p-7 flex items-center justify-center'>$10k - $50K</div>
                            <div className='rounded-2xl bg-white border p-7 flex items-center justify-center'>$50K - $100k</div>
                            <div className='rounded-2xl bg-white border p-7 flex items-center justify-center'>Over $100k</div>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl p-4 my-4'>
                        <div className='font-bold '>Country</div>
                        <div className='mt-1'>
                            <Select>
                                <SelectTrigger className=" rounded-2xl w-full max-w-48">
                                    <SelectValue className='font-bold' placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>                                                </div>
                    </div>
                    <div className='flex justify-between items-center p-5 shadow-lg bg-white w-full'>
                        <div className='text-sm'>Save as draft</div>
                        <div className='rounded-xl py-3.5 px-8 bg-linear-to-br from-[#15ccbd] to-[#17b7d0] flex gap-2 items-center text-white font-semiboldbold'>
                            <p>Build My Business</p>
                            <p><MdOutlineArrowForward /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page