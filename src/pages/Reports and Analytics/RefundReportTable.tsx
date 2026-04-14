import { Button } from "../../components/molecules/Buttons";
import { RefundCard } from "../../components/molecules/Cards";
import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents"
import { useState, useEffect } from "react";

type data = {
  pnr: string;
  passenger: string;
  channel: string;
  amount: string;
  method: string;
  status: string;
  sla: string;
};

const RefundReportTable = () => {
 const [dummyData, setDummyData] = useState<data[]>([]);
  
   const tableHeaders = [
      "PNR",
      "PASSENGER",
      "CHANNEL",
      "AMOUNT",
      "METHOD",
      "STATUS",
      "SLA"
    ];
  
   const placeholderData = [
    {
     pnr: "10001",
     passenger: "Jason Njoku",
     channel: "Direct",
     amount: "N534,000",
     method: "Card",
     status: "Pending",
     sla: "Within SLA",
    },
    {
     pnr: "10002",
     passenger: "Chinedum Victor",
     channel: "Agent",
     amount: "N134,000",
     method: "Card",
     status: "Pending",
     sla: "Within SLA",
    },
    {
     pnr: "10003",
     passenger: "Adekilekun Abdullah",
     channel: "Direct",
     amount: "N564,000",
     method: "Cash",
     status: "Completed",
     sla: "Within SLA",
    },
    {
     pnr: "10004",
     passenger: "Bello Sadam",
     channel: "Direct",
     amount: "N334,000",
     method: "OTA",
     status: "Completed",
     sla: "Within SLA",
    },
    {
     pnr: "10005",
     passenger: "Jason Njoku",
     channel: "Direct",
     amount: "N54,000",
     method: "Card",
     status: "Cancelled",
     sla: "SLA Breach",
    },
    {
     pnr: "10006",
     passenger: "Sogbamu Paul",
     channel: "Agent",
     amount: "N514,000",
     method: "Cash",
     status: "Pending",
     sla: "Within SLA",
    },
    {
     pnr: "10007",
     passenger: "Martins Ajayi",
     channel: "Direct",
     amount: "N534,000",
     method: "Card",
     status: "Completed",
     sla: "Within SLA",
    },
   ];
  
   useEffect(() => {
    setDummyData(placeholderData);
   }, []);

  return (
    <div>
       <div className="grid grid-cols-4 gap-2.5">
        <DashboardAnalytics
         analyticHeading="Total Cancellations"
         value="N12.94M"
         metrics="+12.5%"
         duration="last Month"
         icon="assets/dollar_sign.svg"
         metricColor="gray"
        />
        <DashboardAnalytics
         analyticHeading="Pending Refunds"
         value="N534,000"
         metrics="+8.2%"
         duration="last Month"
         icon="assets/Container (1).png"
         metricColor="green"
        />
        <DashboardAnalytics
         analyticHeading="Completed Refunds"
         value="1,284"
         metrics="+15.3%"
         duration="last Month"
         icon="assets/Container.png"
         metricColor="green"
        />
        <DashboardAnalytics
         analyticHeading="SLA Compliance"
         value="94.2%"
         metrics="+3.1%"
         duration="last Month"
         icon="assets/Container (3).png"
         metricColor="green"
        />
      </div>

      <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
             <p className="font-bold mb-2">Cancellations by Reason (Last 30 Days)</p>
             <div className="grid grid-cols-4 items-center gap-2">
              <RefundCard
               value="N8.2M"
               value_color="text-blue-400"
               purpose="Card Payment"
               rate="66%"
              />
              <RefundCard
               value="N2.8M"
               value_color="text-green-400"
               purpose="Bank Transfer"
               rate="23%"
              />
              <RefundCard
               value="N1.1M"
               value_color="text-amber-400"
               purpose="Cash"
               rate="9%"
              />
              <RefundCard
               value="N300K"
               value_color="text-gray-400"
               purpose="Other"
               rate="2%"
              />
             </div>
            </section>

      <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
       <div className="flex justify-between my-1.5 items-center">
         <span className="inline-block">Refund Requests</span>
         <div className="flex gap-2">
           <button className="refundTableBtn">All</button>
           <button className="refundTableBtn">Pending</button>
           <button className="refundTableBtn">Completed</button>
         </div>
      </div>
      <table className="w-full border-collapse border border-gray-200 mb-6 text-sm rounded-lg">
       <thead className="bg-gray-100 rounded-lg">
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
           REQ-{data.pnr}
          </td>
          <td className="otherTablesTDstyling">
           {data.passenger}
          </td>
          <td className="otherTablesTDstyling">
           {data.channel}
          </td>
          <td className="otherTablesTDstyling">
           {data.amount}
          </td>
          <td className="otherTablesTDstyling">
           {data.method}
          </td>
          <td className={`otherTablesTDstyling ${
                    data.status === "Completed"
                      ? "text-green-600"
                      : data.status === "Pending"
                      ? "text-yellow-600" 
                      : data.status === "Cancelled"
                      ? "text-red-700"
                      : "text-black"
                  }`}>
           <div className={`p-2 rounded-lg w-17 text-center text-[10px] ${
            data.status === "Pending" 
            ? "bg-amber-200"
            : data.status === "Completed"
            ? "bg-green-300"
            : data.status === "Cancelled"
            ? "bg-red-200"
            : "bg-black"
           }`}>
            {data.status}
            </div>
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] ${
            data.sla === "SLA Breach"
            ? "text-red-500"
            : "text-green-500"
          }`}>
           {data.sla}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </section>
    </div>
  )
}

export default RefundReportTable;