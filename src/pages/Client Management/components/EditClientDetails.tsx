import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import prevPage from "/assets/Icons/move-left.png";
import { OtherComponents, RefundWorkflowOptions, ResolutionOptions } from './OtherComponents';
import { Button } from '../../../components/molecules/Buttons';


type client = {
 id: number | string;
 clientName: string;
}

const EditClientDetails = () => {

 const { id } = useParams();
 const [ client, setClient ] = useState<client | null>(null);
 const [ selected, setSelected ] = useState("semi-automated")
 const [ selectedMethod, setSelectedMethod ] = useState("automated")

 useEffect(() => {
  axios.get(`/data/ClientData.json`).then(res => {
   const currentClient = res.data.find((user: client) => user.id === Number(id));
   setClient(currentClient || null);
  });
 }, [id])

 if (!client) {
  return <p className='bg-red-500'>Data does not exist!</p>
 }

  return (
    <div className="w-full px-4 pl-70">
       <section className='flex justify-between'>
        <div>
         <h1 className="font-bold text-2xl">Workflow Configuration: {client.clientName} </h1>
         <span className="inline-block text-[11px]">
           Define resolution options and workflows for this client
         </span>
        </div>
        <div>
           <button className="text-blue-950 bg-white rounded-md px-3.5 py-0 text-sm cursor-pointer">
          <NavLink to="/client-management">
            <img
              src={prevPage}
              alt="go back"
              className="inline-block mr-2 h-4 w-4"
            />
            back
          </NavLink>
        </button>
        </div>
      </section>

      <section className='p-3.5 border border-gray-300 rounded-lg mt-6'>
         <div>
           <div className='flex justify-between items-center'>
            <div>
              <h2>Resolution Options</h2>
              <span className='block text-[12px] my-1'>Select the resolution options available fo this client type</span>
            </div>

            <Button 
             text='Save Configuration'
             bgColor='bg-blue-700'
             textColor='text-white'
            />
           </div>

           <div className='flex justify-evenly mt-2 mb-3'>
            <ResolutionOptions option={"Refund"}/>
            <ResolutionOptions option={"Rebooking"}/>
            <ResolutionOptions option={"Reprotection"}/>
            <ResolutionOptions option={"Compensation"}/>
            <ResolutionOptions option={"Accomodation"}/>
           </div>

           <hr />

           <div className='mt-4'>
              <div>
                <h2 className='text-[15px] font-bold'>Refund Workflow</h2>
                <span className='block text-[12px] my-1'>Configure the refund workflow process for this client</span>
              </div>

              <div className='flex gap-4'>
                <RefundWorkflowOptions
                  value='semi-automated'
                  selected={selected}
                  setSelected={setSelected}
                  title='Semi-Automated Flow'
                  description='Eligibility Checks - Refund Calculation - Passenger Acceptance - Passenger Authentication/Validation(OTP) - In Progress (Queued based on refund timeline - Airline Internal Approvals) - Payment Processing - Approved'
                />
                <RefundWorkflowOptions 
                  value='auto'
                  selected={selected}
                  setSelected={setSelected}
                  title='Fully Automated Flow'
                  description='Eligibility Checks - Refund Calculation - Passenger Acceptance - Passenger Authentication/Validation(OTP) - In Progress (Queued based on refund timeline) - Payment Processing - Approved'
                />
              </div>
            </div>

            <div className='mt-4'>
              <h2 className='mb-2 text-[13px] font-bold'>Refund Display - Value and Breakdown</h2>
              <div className='flex gap-4'>
                <OtherComponents 
                  option='involuntary'
                  checkbox={true}
                  title='Involuntary Cancellation'
                  description='Airline-Initiated (e.g. flight cancellations, schedule changes)'
                  selectedMethod={selected}
                  setSelectedMethod={setSelectedMethod}
                />
                <OtherComponents 
                  option='voluntary'
                  checkbox={true}
                  title='Voluntary Cancellation'
                  description='Customer-Initiated (e.g. passenger requests refund)'
                  selectedMethod={selected}
                  setSelectedMethod={setSelectedMethod}
                />
              </div>
            </div>

            <div className='mt-4'>
              <h1 className='text-[13px] font-bold'>Refund Retry Method</h1>
              <span className='block text-[12px] my-1'>Retry payment request beyond the airline&#39;s configured refund timeline</span>

              <div className='flex gap-3'>
                <OtherComponents
                    option='manual'
                    checkbox={false}
                    title='Manual Retry'
                    description='By Airline staff'
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                  />
                  <OtherComponents
                    option='automated'
                    checkbox={false}
                    title='Automated Retry'
                    description='System triggered'
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                  />
                  <OtherComponents
                    option='both'
                    checkbox={false}
                    title='Both Methods'
                    description='Manual + Automated'
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                  />
              </div>
            </div>

        </div>
      </section>

    </div>
  )
}

export default EditClientDetails