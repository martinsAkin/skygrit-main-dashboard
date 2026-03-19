import { RefundCard } from "../../components/molecules/Cards"
import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents"
import { AnalysisCard } from "./ReroutingReportsTable";

const DisputesReportsTable = () => {

  return (
    <div>
      <section className="grid grid-cols-4 gap-2">
        <DashboardAnalytics
         analyticHeading="Open Disputes"
         value="23"
         metrics="-15.4%"
         duration="last month"
         metricColor="green"
         icon="assets/warning_sign.svg"
        />
        <DashboardAnalytics
         analyticHeading="Avg Resolution Time"
         value="3.2 days"
         metrics="-1.1%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (1).png"
        />
        <DashboardAnalytics
         analyticHeading="Financial Exposure"
         value="N1.8M"
         metrics="-18.2%"
         duration="last month"
         metricColor="green"
         icon="assets/dollar_sign.svg"
        />
        <DashboardAnalytics
         analyticHeading="Resolution Rate"
         value="94.5%"
         metrics="+3.8%"
         duration="last month"
         metricColor="green"
         icon="assets/warning_sign.svg"
        />
      </section>

       <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
         <p className="font-bold mb-2">Root Cause Analysis (Last 30 Days)</p>
         <div className="grid grid-cols-4 items-center gap-2">
          <RefundCard
           value="34"
           value_color="text-red-400"
           purpose="System Issues"
           rate="38% of total"
          />
          <RefundCard
           value="28"
           value_color="text-amber-400"
           purpose="Passenger Error"
           rate="31% of total"
          />
          <RefundCard
           value="18"
           value_color="text-blue-400"
           purpose="Airline Process"
           rate="20% of total"
          />
          <RefundCard
           value="10"
           value_color="text-gray-400"
           purpose="Vendor/Partner"
           rate="11% of total"
          />
         </div>
       </section>

     <section className="flex gap-3 my-5">
       <AnalysisCard 
        title="Resolution Time by Category"
        items={[
         {label: "Refund Disputes", value: "2.8 days"},
         {label: "Service Issues", value: "3.5 days"},
         {label: "Compensation Claims", value: "4.2 days"},
         {label: "Billing Disputes", value: "2.1 days"}
        ]}
       />
       <AnalysisCard 
        title="Financial Exposure by Type"
        items={[
         {label: "Refund Disputes", value: "N980,000", valueColor: "danger"},
         {label: "Compensation", value: "N520,000", valueColor: "danger"},
         {label: "Service Credits", value: "N210,000", valueColor: "danger"},
         {label: "Other", value: "N90,000", valueColor: "danger"}
        ]}
       />   
      </section>

    </div>
  )
}

export default DisputesReportsTable