import { useState } from "react"
import { tabs, type clientManagement } from "../../interface"
import AllClients from "./components/AllClients";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
// import AddNewClient from "../../components/modules/AddNewClient";
import { useNavigate } from "react-router";

const ClientDashboard = () => {
  const navigate = useNavigate();
 const [activeTab, setActiveTab] = useState<clientManagement>("All");
//  const [showForm, setShowForm] = useState(false);
  // const [refreshKey, setRefreshKey] = useState(0);
 
//  const handleOpenForm = () => setShowForm(true);
//  const handleCloseForm = () => setShowForm(false);

//  const handleRefresh = () => {
//     setShowForm(false);
//     // setRefreshKey((prevKey) => prevKey + 1);
//   }

  return (
    <div className="w-full px-4 ">
      <section>
        <h1 className="font-bold text-2xl">Client Management</h1>
        <span className="inline-block text-[11px]">
          Configure and define workflows for different client types
        </span>
      </section>

      <section className="flex justify-between">
        {/* Tabs */}
        <ul className="flex border-b border-[#E5E7EB]">
          {tabs.map((tab) => (
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
        <button
          className="flex gap-1.5 flex-row items-center justify-center px-3 py-2 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium  hover:bg-[#1565C0] transition cursor-pointer"
          onClick={() => navigate("/clients/new")}
        >
          <img src={addIcon} alt="add" />
          <p>Add New Client</p>
        </button>
      </section>

      {/* Content */}
      <section className="mt-3">
         {activeTab === "All" && <AllClients />}
        {/* {activeTab === "Indirect Sales" && <CancellationReportsTable/>}
        {activeTab === "Corporate" && <RefundReportTable/>}
        {activeTab === "Non-Corporate" && <ReroutingReportsTable/>} */}
      </section>

      {/* {showForm && <AddNewClient onCancel={handleCloseForm} onSuccess={handleRefresh} />} */}
    </div>
  );
};

export default ClientDashboard