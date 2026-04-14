import { useEffect, useState } from "react";
import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents";

export type data = {
 reportType: string;
 generatedAt: string;
 period: string;
 status: string;
 action: string;
};
const OverviewReportsTable = () => {
 const [dummyData, setDummyData] = useState<data[]>([]);

 const tableHeaders = [
    "Report Type",
    "Generated At",
    "Period",
    "Status",
    "Action",
  ];

 const placeholderData = [
  {
   reportType: "Daily Cancellation Summary",
   generatedAt: "2026-01-10 03:00",
   period: "Jan 09, 2026",
   status: "Completed",
   action: "Download",
  },
  {
   reportType: "Refund Aging Report",
   generatedAt: "2026-01-10 07:30",
   period: "Dec, 2025",
   status: "Completed",
   action: "Download",
  },
  {
   reportType: "Settlement Reconcilliation",
   generatedAt: "2026-01-10 06:40",
   period: "Week 1, 2026",
   status: "Processing",
   action: "Pending",
  },
  {
   reportType: "Compliance Audit Report",
   generatedAt: "2026-01-10 23:00",
   period: "Q4 2025",
   status: "Failed",
   action: "Download",
  },
  {
   reportType: "Comunication Delivery",
   generatedAt: "2026-01-10 00:00",
   period: "Jan 09, 2026",
   status: "Completed",
   action: "Download",
  },
  {
   reportType: "Comunication Delivery",
   generatedAt: "2026-01-10 00:00",
   period: "Jan 09, 2026",
   status: "In-Progress",
   action: "Pending",
  },
 ];

 useEffect(() => {
  setDummyData(placeholderData);
 }, []);

 return (
  <div>
   <div className="grid grid-cols-3 gap-2.5">
    <DashboardAnalytics
     analyticHeading="Total Cancellations"
     value="1,247"
     metrics="+8.2%"
     duration="last Month"
     icon="assets/Container (2).png"
     metricColor="red"
    />
    <DashboardAnalytics
     analyticHeading="Refunds Processed"
     value="N12.4M"
     metrics="+12.5%"
     duration="last Month"
     icon="assets/dollar_sign.svg"
     metricColor="green"
    />
    <DashboardAnalytics
     analyticHeading="Rerouting Success"
     value="N94.3%"
     metrics="+2.1%"
     duration="last Month"
     icon="assets/Container.png"
     metricColor="green"
    />
    <DashboardAnalytics
     analyticHeading="Settlememt Rate"
     value="98.7%"
     metrics="+1.3%"
     duration="last Month"
     icon="assets/Container (3).png"
     metricColor="green"
    />
    <DashboardAnalytics
     analyticHeading="Open Dispute"
     value="23"
     metrics="-15.4%"
     duration="last Month"
     icon="assets/warning_sign.svg"
     metricColor="green"
    />
    <DashboardAnalytics
     analyticHeading="Notification Success"
     value="99.2%"
     metrics="+0.5%"
     duration="last Month"
     icon="assets/message_sign.svg"
     metricColor="green"
    />
   </div>
      
     <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
      <div className="flex justify-between">
       <span className="inline-block">Recent Reports</span>
       <span className="inline-block text-blue-500 underline">View All</span>
      </div>
      <table className="tableheadingStyle">
       <thead className="bg-gray-100">
          <tr>
            {tableHeaders.map((field, index) => (
              <th
                key={index}
                className="tableheader"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
       <tbody className="px-4 py-2">
        {dummyData.map((data, index) => (
         <tr key={index}>
          <td className="otherTablesTDstyling">
           {data.reportType}
          </td>
          <td className="otherTablesTDstyling">
           {data.generatedAt}
          </td>
          <td className="otherTablesTDstyling">
           {data.period}
          </td>
          <td className={`otherTablesTDstyling ${
                    data.status === "Completed"
                      ? "text-green-600"
                      : data.status === "Processing"
                      ? "text-yellow-600"
                      : data.status === "Failed"
                      ? "text-red-700"
                      : data.status === "In-Progress"
                      ? "text-amber-500"
                      : "text-black"
                  }`}>
           {data.status}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] ${
            data.action === "Download"
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
 );
};

export default OverviewReportsTable;
