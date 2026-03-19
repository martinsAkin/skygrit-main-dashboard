import { RefundCard } from "../../components/molecules/Cards"
import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents"
import { useState, useEffect } from 'react'
import { AnalysisCard } from "./ReroutingReportsTable";


type data = {
 settlementId: number;
 partner: string;
 period: string;
 amount: string;
 reconciled: string;
 variance: string;
 status: string
};

const SettlementsReportsTable = () => {

 const [dummyData, setDummyData] = useState<data[]>([]);
 
  const tableHeaders = [
     "SETTLEMENT ID",
     "PARTNER/CHANNEL",
     "PERIOD",
     "TOTAL AMOUNT",
     "RECONCILED",
     "VARIANCE",
     "STATUS"
   ];
 
  const placeholderData = [
   {
    settlementId: 2001,
    partner: "Direct Sales",
    period: "Week 1, 2026",
    amount: "8,450,000",
    reconciled: "8,450,000",
    variance: "0",
    status: "Reconciled"
   },
   {
    settlementId: 2002,
    partner: "Travel Agent Network",
    period: "Week 1, 2026",
    amount: "8,000,000",
    reconciled: "5,000,000",
    variance: "3,000,000",
    status: "Pending"
   },
   {
    settlementId: 2003,
    partner: "Online Agent Network",
    period: "Week 1, 2026",
    amount: "4,850,000",
    reconciled: "4,850,000",
    variance: "0",
    status: "Reconciled"
   },
   {
    settlementId: 2004,
    partner: "Corporate Bookings",
    period: "Week 1, 2026",
    amount: "5,500,000",
    reconciled: "5,379,000",
    variance: "121,000",
    status: "Pending"
   },
   {
    settlementId: 2005,
    partner: "Direct Sales",
    period: "Dec 2025 - Week 4",
    amount: "3,500,000",
    reconciled: "3,500,000",
    variance: "0",
    status: "Reconciled"
   },
  ];
 
  useEffect(() => {
   setDummyData(placeholderData);
  }, []);

  return (
    <div>
      <section className="grid grid-cols-4 gap-2">
        <DashboardAnalytics
         analyticHeading="Total Settlement Value"
         value="N28.5M"
         metrics="+15.8%"
         duration="last month"
         metricColor="green"
         icon="assets/dollar_sign.svg"
        />
        <DashboardAnalytics
         analyticHeading="Reconciliation Rate"
         value="98.7%"
         metrics="+1.3%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (3).png"
        />
        <DashboardAnalytics
         analyticHeading="Unreconciliated Amount"
         value="N371,000"
         metrics="-22.4%"
         duration="last month"
         metricColor="green"
         icon="assets/warning_sign.svg"
        />
        <DashboardAnalytics
         analyticHeading="Avg Settlement Time"
         value="2.3 days"
         metrics="-0.5%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (1).png"
        />
      </section>

       <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
         <p className="font-bold mb-2">Settlement Distribution by Channel</p>
         <div className="grid grid-cols-4 items-center gap-2">
          <RefundCard
           value="N11.9M"
           value_color="text-blue-400"
           purpose="Direct Sales"
           rate="42% of total"
          />
          <RefundCard
           value="N8.5M"
           value_color="text-green-400"
           purpose="Travel Agents"
           rate="30% of total"
          />
          <RefundCard
           value="N5.6M"
           value_color="text-amber-400"
           purpose="OTAs"
           rate="20% of total"
          />
          <RefundCard
           value="N2.5M"
           value_color="text-gray-400"
           purpose="Corporate"
           rate="8% of total"
          />
         </div>
       </section>

      <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
      <div className="flex justify-between mb-3">
       <span className="inline-block">Settlement Transactions</span>
       <span className="inline-block text-blue-500 underline">View All</span>
      </div>
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
           STL-{data.settlementId}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           {data.partner}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           {data.period}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           N{data.amount}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           N{data.reconciled}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238]">
           N{data.variance}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[13px] text-[#263238] ${
                    data.status === "Reconciled"
                      ? "text-green-600"
                      : data.status === "Pending"
                      ? "text-yellow-600"
                      : data.status === "Failed"
                      ? "text-red-700"
                      : "text-black"
            }`}>
             <div className={`p-2 rounded-lg w-17 text-center text-[10px] ${
            data.status === "Pending" 
            ? "bg-amber-200"
            : data.status === "Reconciled"
            ? "bg-green-300"
            : data.status === "Failed"
            ? "bg-red-200"
            : "bg-black"
           }`}>
            {data.status}
            </div>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </section>

     <section className="flex gap-3 my-5">
       <AnalysisCard 
        title="Outstanding Payables"
        items={[
         {label: "Travel Agents", value: "N185,000", valueColor: "danger"},
         {label: "OTAs", value: "N98,000", valueColor: "danger"},
         {label: "Corporate", value: "N88,000", valueColor: "danger"},
         {label: "Total", value: "N371,000", valueColor: "danger"}
        ]}
       />
       <AnalysisCard 
        title="Aging Analysis"
        items={[
         {label: "0-7 Days", value: "N245,000", valueColor: "success"},
         {label: "8-14 Days", value: "N98,000", valueColor: "pending"},
         {label: "15+ Days", value: "N28,000", valueColor: "danger"},
         {label: "Total Outstanding", value: "N371,000", valueColor: "default"}
        ]}
       />   
      </section>

    </div>
  )
}

export default SettlementsReportsTable