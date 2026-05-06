import React from 'react'
import InstantNotifTable from './InstantNotifTable'

const InstantNotification = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Notification Engine
        </h2>
        <p className="text-[14px] text-gray-500 mt-1">
          Configure and manage passenger communications across all channels
        </p>
      </div>

      <div className='mt-12 flex flex-col gap-8'>
       <div>
         <h1 className='text-gray-600'>Query Method</h1>
         <div className='flex gap-2 w-170'>
          <select name="filter" id="" className='p-2 border border-gray-400 rounded-md w-full text-gray-400 outline-none'>
           <option value="">Select</option>
           <option value="flightNumber">Flight Number</option>
           <option value="pnr">PNR</option>
           <option value="email">Email/Phone Number</option>
          </select>
          <input
           type="text"
           placeholder='Enter'
           className='p-2 border border-gray-400 rounded-md w-full outline-none'
          />
         </div>
       </div>
       
       <InstantNotifTable />

      </div>
    </div>
  )
}

export default InstantNotification