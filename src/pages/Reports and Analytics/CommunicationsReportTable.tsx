import {useState, useEffect, type ReactNode} from 'react'
import { DashboardAnalytics } from '../Dashboard/components/DashboardComponents'
import { ChannelEffectivenessCard } from '../../components/molecules/Cards'
import { AnalysisCard } from './ReroutingReportsTable';

type data = {
 category: string;
 totalSent: string | number;
 delivered: string | number;
 failed: number;
 successRate: number;
 avgTime: number;
};

type dataTable2 = {
  id: number;
  passenger: string;
  type: string,
  channel: string;
  failureReason: string;
  timestamp: string | ReactNode;
  fallbackStatus: string;
  status: string;
};


const CommunicationsReportTable = () => {

 const [dummyData, setDummyData] = useState<data[]>([]);
 const [dummyData2, setDummyData2] = useState<dataTable2[]>([]);
 
  const tableHeaders = [
     "CATEGORY",
     "TOTAL SENT",
     "DELIVERED",
     "FAILED",
     "SUCCESS RATE",
     "AVG TIME",
  ];

  const table2Headers = [
     "ID",
     "PASSENGER",
     "TYPE",
     "CHANNEL",
     "FAILURE REASON",
     "TIMESTAMP",
     "FALLBACK STATUS",
  ];
 
  const placeholderData = [
   {
    category: "Cancellation Notices",
    totalSent:  "1,847",
    delivered:  "1,833",
    failed: 14,
    successRate: 99.2,
    avgTime: 2.1,
   },
   {
    category: "Delay Notifications",
    totalSent:  "3,256",
    delivered:  "3,238",
    failed: 18,
    successRate: 99.4,
    avgTime: 1.8,
   },
   {
    category: "Rerouting Updates",
    totalSent:  "892",
    delivered:  "886",
    failed: 6,
    successRate: 99.3,
    avgTime: 2.5,
   },
   {
    category: "Payment Confirmations",
    totalSent:  "4,523",
    delivered:  "4,498",
    failed: 25,
    successRate: 99.4,
    avgTime: 1.2,
   },
   {
    category: "Compensation Messages",
    totalSent:  "2,329",
    delivered:  "2,329",
    failed: 40,
    successRate: 98.3,
    avgTime: 3.4,
   },
   {
    category: "Flight Cancellation",
    totalSent:  "329",
    delivered:  "329",
    failed: 0,
    successRate: 100,
    avgTime: 20.8,
   }
  ];

  const placeholder2 = [
   {
    id: 5001,
    passenger: "Jason Njoku",
    type: "Cancellation",
    channel: "Email",
    failureReason: "Invalid Email Address",
    timestamp: "2026-01-10 08:15",
    fallbackStatus: "SMS Sent",
    status: "Sent"
   },
   {
    id: 5002,
    passenger: "Rusenior Whatever",
    type: "Delay",
    channel: "SMS",
    failureReason: "Network Timeout",
    timestamp: "2026-01-01 12:35",
    fallbackStatus: "SMS Sent",
    status: "Sent"
   },
   {
    id: 5003,
    passenger: "Pep Guardiola",
    type: "Compenation",
    channel: "Email",
    failureReason: "Mailbox Full",
    timestamp: "2025-12-13 09:55",
    fallbackStatus: "SMS Sent",
    status: "Sent"
   },
   {
    id: 5004,
    passenger: "Pedro Neto",
    type: "Rerouting",
    channel: "Push",
    failureReason: "Device Offline",
    timestamp: "2026-02-18 15:15",
    fallbackStatus: "SMS Sent",
    status: "Sent"
   },
   {
    id: 5005,
    passenger: "Erling Haaland",
    type: "Payment",
    channel: "SMS",
    failureReason: "Invalid Number",
    timestamp: "2026-01-09 15:35",
    fallbackStatus: "Pending Retry",
    status: "Pending"
   },
  ]

 useEffect(() => {
   setDummyData(placeholderData);
   setDummyData2(placeholder2)
  }, []);

  return (
    <div>
      <section className="grid grid-cols-4 gap-2">
        <DashboardAnalytics
         analyticHeading="Total Notifications"
         value="12,847"
         metrics="+18.3%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Delivery Success Rate"
         value="99.2%"
         metrics="+0.5%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Failed Deliveries"
         value="103"
         metrics="+12.8%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Avg Delivery Time"
         value="2.3 mins"
         metrics="-0.4%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
      </section>

       <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
           <p className="font-bold mb-2">Channel Effectiveness</p>
           <div className="grid grid-cols-4 items-center gap-2">
             <ChannelEffectivenessCard 
               title="SMS"
               items={[
                {label: "Success Rate:", value: "99.7%", valueColor: "sms"},
                {label: "Avg Time:", value: "1.8 mins"},
                {label: "Volume:", value: "5,234"}
               ]}
             />

             <ChannelEffectivenessCard 
               title="Email"
               items={[
                {label: "Success Rate:", value: "98.5%", valueColor: "email"},
                {label: "Avg Time:", value: "2.5 mins"},
                {label: "Volume:", value: "4,892"}
               ]}
             />

             <ChannelEffectivenessCard 
               title="Push Notification"
               items={[
                {label: "Success Rate:", value: "97.8%", valueColor: "pushNotif"},
                {label: "Avg Time:", value: "0.8 mins"},
                {label: "Volume:", value: "1,823"}
               ]}
             />

             <ChannelEffectivenessCard 
               title="In-App"
               items={[
                {label: "Success Rate:", value: "99.1%", valueColor: "inApp"},
                {label: "Avg Time:", value: "0.5 mins"},
                {label: "Volume:", value: "898"}
               ]}
             />
           </div>
       </section>


       <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
        <span className="inline-block text-left font-bold mb-1.5">Delivery Performance by Category</span>

        <table className="w-full border-collapse border border-gray-200 mb-6 text-sm rounded-2xl">
         <thead className="bg-gray-100">
            <tr>
              {tableHeaders.map((field, index) => (
                <th
                  key={index}
                  className="p-2 text-left text-[12.5px] font-bold text-[#5c6b72] border-b border-gray-200"
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>
         <tbody className="px-4 py-2">
          {dummyData.map((data, index) => (
           <tr key={index}>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.category}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.totalSent}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.delivered}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             N{data.failed}
            </td>          
            <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238] ${
                      data.avgTime < 3
                        ? "text-green-600"
                        : (data.avgTime > 3 && data.avgTime < 10)
                        ? "text-yellow-600"
                        : data.avgTime > 10
                        ? "text-red-700"
                        : "text-black"
              }`}>
               <div className={`p-2 rounded-lg w-17 text-center`}>
              {data.successRate}%
              </div>
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[#263238]">
             {data.avgTime} mins
            </td>
           </tr>
          ))}
         </tbody>
        </table>
     </section>

     <section className="flex gap-3 my-5">
       <AnalysisCard 
        title="Fallback Channel Usage"
        items={[
         {label: "Email -> SMS", value: "58 times"},
         {label: "SMS -> Email", value: "32 times"},
         {label: "Push -> SMS", value: "13 times"},
         {label: "Total Fallbacks", value: "103", valueColor: "success"}
        ]}
       />
       <AnalysisCard 
        title="System Uptime & Reliability"
        items={[
         {label: "SMS Gateway", value: "99.8%", valueColor: "success"},
         {label: "Email Service", value: "99.5%", valueColor: "success"},
         {label: "Push Service", value: "99.2%", valueColor: "success"},
         {label: "Overall Uptime", value: "99.6%", valueColor: "success"}
        ]}
       />   
      </section>

      <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
        <span className="inline-block text-left font-bold mb-1.5">Delivery Performance by Category</span>

        <table className="w-full border-collapse border border-gray-200 mb-6 text-sm rounded-2xl">
         <thead className="bg-gray-100">
            <tr>
              {table2Headers.map((field, index) => (
                <th
                  key={index}
                  className="p-2 text-left text-[12.5px] font-bold text-[#5c6b72] border-b border-gray-200"
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>
         <tbody className="px-4 py-2">
          {dummyData2.map((data, index) => (
           <tr key={index}>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             NOT-{data.id}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.passenger}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.type}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
             {data.channel}
            </td>          
            <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]`}>
              {data.failureReason}
            </td>
            <td className="px-2 py-1.5 border-b border-gray-200 text-[#263238]">
             {data.timestamp}
            </td>
            <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238] ${
                      data.status === "Sent"
                        ? "text-green-600"
                        : data.status === "Pending"
                        ? "text-yellow-600"
                        : data.status === "failed"
                        ? "text-red-700"
                        : "text-black"
              }`}>
              {data.fallbackStatus}
            </td>
           </tr>
          ))}
         </tbody>
        </table>
     </section>

    </div>
  )
}

export default CommunicationsReportTable