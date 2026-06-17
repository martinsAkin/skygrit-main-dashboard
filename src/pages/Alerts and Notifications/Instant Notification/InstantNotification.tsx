import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import type { InstantNotifTable } from "../../../interface";
import axios from 'axios';

const InstantNotification = () => {
  
  const [dummyData, setDummyData] = useState<InstantNotifTable[]>([]);
  const navigate = useNavigate();
   
  const tableHeaders = [
    "",
    "PNR",
    "Date",
    "Customer Name",
    "Email",
    "Booking Reference",
    "Ticket Class",
    "Ticket Type",
    "Amount",
  ];

  useEffect(() => {
    axios
      .get("/data/InstantNotif.json")
      .then((response) => setDummyData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const curateMessage = () => {
    navigate("/instant-message");
  }

  if (dummyData.length === 0)
    return <div>Loading... if this persists, the table has no data</div>;

  return (
    <div className='p-8'>
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
       
        <div className="p-2 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-2">
          <h1 className='font-bold text-xl my-1.5 ml-2'>Passenger List</h1>
          <table className="w-[97%] mb-6 text-sm rounded-2xl">
          <thead>
              <tr>
                {tableHeaders.map((field, index) => (
                  <th
                    key={index}
                    className="p-3 text-left text-[12.5px] text-[#263238] border-b border-gray-200"
                  >
                    {field}
                  </th>
                ))}
              </tr>
            </thead>
          <tbody className="px-4 py-2">
            {dummyData.map((data, index) => (
            <tr key={index}>
              <td className="tableTextSizing">
                <input type="checkbox" id="" />
              </td>
              <td className="tableTextSizing">
              REQ-{data.passengerId}
              </td>
              <td className="tableTextSizing">
              {data.date}
              </td>
              <td className="tableTextSizing">
              {data.customerName}
              </td>
              <td className="tableTextSizing">
              {data.email}
              </td>
              <td className="tableTextSizing">
              {data.bookingRef}
              </td>
              <td className="tableTextSizing">
              {data.ticketClass}
              </td>
              <td className="tableTextSizing">
              {data.ticketType}
              </td>
              <td className="tableTextSizing">
              {data.amout}
              </td>
            </tr>
            ))}
          </tbody>
          </table>
        </div>

        <div className='flex gap-3 items-end'>
          <button 
            className='p-2.5 text-sm rounded-lg bg-white border border-gray-800 text-gray-500'>
              Cancel
          </button>
          <button 
            onClick={curateMessage}
            className='p-2.5 text-sm rounded-lg bg-blue-500 text-white'
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstantNotification