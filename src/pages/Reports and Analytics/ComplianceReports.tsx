import { useEffect, useState } from 'react'
import { DashboardAnalytics } from '../Dashboard/components/DashboardComponents';
import { SlaPerformanceMetrics } from '../../components/molecules/Cards';


// type alertProp = {
//  title: string;
//  body: string;
// }

type data = {
 reportName: string;
 frequency: string;
 lastGenerated: string;
 status: string;
 nextDue: string;
 action: string;
};

const ComplianceReports = () => {

  const [dummyData, setDummyData] = useState<data[]>([]);
//  const [alert, setAlert] = useState<alertProp[]>([]);

const tableHeaders = [
    "REPORT NAME",
    "FREQUENCY",
    "LAST GENERATED",
    "STATUS",
    "NEXT DUE",
    "ACTION",
  ];

  const placeholderData = [
  {
   reportName: "Disruption Response Time Report",
   frequency: "Daily",
   lastGenerated: "2026-01-10 06:00",
   status: "Submitted",
   nextDue: "2026-01-11",
   action: "View",
  },
  {
   reportName: "Passenger Notification Compliance",
   frequency: "Daily",
   lastGenerated: "2026-01-10 06:00",
   status: "Submitted",
   nextDue: "2026-01-11",
   action: "View",
  },
  {
   reportName: "Refund Timeliness Compliance",
   frequency: "Weekly",
   lastGenerated: "2026-01-06 00:00",
   status: "Submitted",
   nextDue: "2026-01-13",
   action: "View",
  },
  {
   reportName: "Rerouting Fairness Report",
   frequency: "Weekly",
   lastGenerated: "2026-01-06 00:00",
   status: "Submitted",
   nextDue: "2026-01-13",
   action: "View",
  },
  {
   reportName: "Compensation Fufilment Report",
   frequency: "Monthly",
   lastGenerated: "2026-01-10 19:00",
   status: "Submitted",
   nextDue: "2026-02-01",
   action: "View",
  },
  {
   reportName: "Compensation Fufilment Report",
   frequency: "Monthly",
   lastGenerated: "2026-01-10 19:00",
   status: "Submitted",
   nextDue: "2026-02-01",
   action: "View",
  },
 ];

 useEffect(() => {
  setDummyData(placeholderData);
 }, []);

//  const alertdata = [
//   {
//    title: "Attention Required: Rerouting SLA Below Target",
//    body: "The rerouting SLA compliance is currently below 89.5%, which is below the required 90% threshold. Please review and take corrective action."
//   }
//  ]

//  setAlert(alertdata)

  return (
    <div>
      {/* { alert.map((Info, index) => (
        <div key={index}>
          <li>{Info.title}</li>
          <li>{Info.body}</li>
        </div>
      ))} */}
     <section className="grid grid-cols-4 gap-2">
        <DashboardAnalytics
         analyticHeading="Overall Compliance"
         value="96.8%"
         metrics="+2.3%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="SLA Adherence"
         value="94.2%"
         metrics="+3.1%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Regulatory Reports"
         value="48"
         metrics="+12 this month"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Compliance Issues"
         value="5"
         metrics="-8"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
      </section>

      <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
         <p className="font-bold mb-2">SLA Performance Metrics</p>
         <SlaPerformanceMetrics 
          notificationValue={96.8}
          refundValue={94.2}
          reroutingValue={89.5}
          disputeValue={92.1}
         />
       </section>
       
       
       <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
       <span className="inline-block">NCAA Regulatory Reports</span>
       <button className="bg-blue-500 text-white py-2 px-1.5 text-center rounded-lg text-[12px]">Generate Custom Report</button>
      </div>
      <table className="w-full border-collapse border border-gray-200 mb-6 text-sm rounded-2xl">
       <thead className="bg-gray-100">
          <tr>
            {tableHeaders.map((field, index) => (
              <th
                key={index}
                className="p-3 text-left text-[12.5px] font-bold text-[#263238] border-b border-gray-200"
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
           {data.reportName}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           {data.frequency}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           {data.lastGenerated}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238] ${
                    data.status === "Submitted"
                      ? "text-green-800 font-bold"
                      : data.status === "Pending"
                      ? "text-yellow-600"
                      : "text-black"
                  }`}>
                    <div className={`p-2 rounded-lg w-17 text-center text-[10px] ${
                      data.status === "Pending" 
                      ? "bg-amber-200"
                      : data.status === "Submitted"
                      ? "bg-green-300"
                      : "bg-black"
                    }`}>
                  {data.status}
           </div>
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           {data.nextDue}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] hover:underline cursor-pointer ${
            data.action === "View"
            ? "text-blue-600"
            : "text-gray-400"
          }`}>
           {data.action}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </section>

    </div>
  )
}

export default ComplianceReports