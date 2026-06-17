import React from 'react'

function page() {
  return (
    <div className='bg-gray-50 min-h-screen text-black'>
      <div className='text-xl font-bold'>
        <div className=''>
          <img src="/l.png" className='w-[200 px] h-[120px]'></img>
        </div>
        <div>
        <ul className='flex justify-between bg-green-600 p-3'>
            <div>
              SolveSphere
            </div>
          <div className='flex gap-16 text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Problems</li>
          <li>Features</li>
          <li>Contact</li>
          </div>
          <div>
          <button className='py-2 px-10 bg-green-800 text-sm text-white rounded-xl'>
            Login
          </button> 
          </div>
        </ul>
        </div>

      </div>
    </div>    

  )
}

export default page
