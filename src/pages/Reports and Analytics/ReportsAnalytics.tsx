import { useState } from "react";
import OverviewReportsTable from "./OverviewReportsTable";
import type { ReportCategory } from "../../interface";
import { categories } from "../../interface";
import CancellationReportsTable from "./CancellationReportsTable";
import { Button } from "../../components/molecules/Buttons";
import { FilterOnly } from "../../components/molecules/FilterAndSearch";
import DateRangePicker from "../../components/molecules/DateRangePicker";
import RefundReportTable from "./RefundReportTable";
import ReroutingReportsTable from "./ReroutingReportsTable";
import SettlementsReportsTable from "./SettlementsReportsTable";
import DisputesReportsTable from "./DisputesReportsTable";
import CommunicationsReportTable from "./CommunicationsReportTable";
import ComplianceReports from "./ComplianceReports";

export const ReportsAnalytics = () => {
  const [activeTab, setActiveTab] = useState<ReportCategory>("Overview");

  return (
    <div className="w-full px-4 pl-70">
      <section>
        <h1 className="font-bold text-2xl">Reports & Analytics</h1>
        <span className="inline-block text-[11px]">
          Comprehension insights and regulatory reporting
        </span>
      </section>

      {/* Tabs */}
      <ul className="flex border-b border-[#E5E7EB]">
        {categories.map((tab) => (
          <li
            key={tab}
            className={`p-4 text-[14px] cursor-pointer list-none relative
              ${
                activeTab === tab
                  ? "text-[#202223] font-semibold"
                  : "text-[#6E767A]"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm" />
            )}
          </li>
        ))}
      </ul>

      <section className="flex justify-between items-center mt-4">
          <div className="flex gap-3">
           <DateRangePicker />
           <FilterOnly />
          </div>
          <div className="flex gap-3">
           <Button 
            text="Export PDF"
            bgColor="bg-white"
            iconPath="v"
            textColor="text-black"
           />
           <Button
            text="Export CSV"
            bgColor="bg-blue-600"
            iconPath="v"
            textColor="text-white"
           />
          </div>
         </section>

      {/* Content */}
      <section className="mt-3">
        {activeTab === "Overview" && <OverviewReportsTable />}
        {activeTab === "Cancellations" && <CancellationReportsTable/>}
        {activeTab === "Refund" && <RefundReportTable/>}
        {activeTab === "Rerouting" && <ReroutingReportsTable/>}
        {activeTab === "Settlements" && <SettlementsReportsTable/>}
        {activeTab === "Disputes" && <DisputesReportsTable/>}
        {activeTab === "Communication" && <CommunicationsReportTable/>}
        {activeTab === "Compliance" && <ComplianceReports/>}
      </section>
    </div>
  );
};
