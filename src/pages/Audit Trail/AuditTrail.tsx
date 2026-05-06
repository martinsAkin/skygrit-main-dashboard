import React, { useEffect, useState } from "react";
import axios from "axios";
// import notifyIcon from "/assets/notification.svg";
import searchIcon from "/assets/Icons/Searchhh.svg";
import loginIcon from "/assets/octicon_clock-24.svg";
import dropdownIcon from "/assets/dropdown.svg";
import signoutIcon from "/assets/octicon_clock-242.svg";
// import ReviewApproval from "../components/modules/ReviewApproval";
// import DeclineApproval from "../components/modules/DeclineApproval";

interface ActivityLog {
  activity: string;
  description: string;
  timeLogged: string;
}

interface Admin {
  adminId: string | number;
  name: string;
  role: string;
  activityLog: ActivityLog;
}

const AuditTrail: React.FC = () => {
  const categories = ["User Activity Log", "Policy Activity Log"] as const;
  type Category = (typeof categories)[number];

  const [category, setCategory] = useState<Category>("User Activity Log");
  const [data, setData] = useState<Admin[]>([]);
  const [activeAdminId, setActiveAdminId] = useState<number | string | null>(
    null
  );
  const headFieldsRow = ["Actvity", "Description", "Time Logged"];
  const handleActive = (id: number | string): void => {
    setActiveAdminId((prev) => (prev === id ? null : id));
    setDropdown(false);
  };

  useEffect(() => {
    axios
      .get<Admin[]>("/data/AdminData.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = data.filter((admin) =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedAdmin = data.find((admin) => admin.adminId === activeAdminId);
  return (
    <div className=" flex flex-col h-full ">
      {/* Header + Categories */}
      <section className=" bg-white border-b border-b-[#E5E7EB]">
        {/* Category Tabs */}
        <section className="py-4 px-16 bg-white border-b border-b-gray-200">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Audit Trail
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Track all logged activities here
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-col mt-8">
            <ul className="flex flex-row">
              {categories.map((list) => (
                <li
                  key={list}
                  className={`relative list-none px-6 py-3 text-[14px] border-b-2 cursor-pointer transition-all duration-300 ${
                    category === list
                      ? "text-blue-800 font-semibold border-blue-800"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                  onClick={() => setCategory(list)}
                >
                  {list}
                  {category === list && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded-t bg-blue-800 animate-[slideIn_0.3s_ease-out]"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      {/* Activity Table */}
      <section className="flex-1 m-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6 overflow-hidden">
        <div className="flex flex-col h-full gap-4">
          {/* Search bar */}
          <div className="flex flex-row w-96 px-4 py-2.5 gap-3 bg-gray-50 border border-gray-300 rounded items-center hover:border-blue-400 transition-colors">
            <img src={searchIcon} alt="" />
            <input
              className="w-full outline-none text-[14px] font-medium bg-transparent placeholder-gray-400"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search with user name"
            />
          </div>

          <div className=" flex flex-row gap-6 h-full overflow-hidden">
            {/* Left: user list */}
            <div className=" w-[350px] border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <h2 className="bg-gray-200 text-[16px] text-gray-800 font-semibold p-4">
                Users
              </h2>

              <div className="max-h-[600px] overflow-y-auto">
                {filteredData.length > 0 ? (
                  filteredData.map((admin, index) => {
                    const isActive = activeAdminId === admin.adminId;
                    return (
                      <div
                        key={admin.adminId}
                        className={`flex flex-row px-4 py-3 justify-between items-center cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-blue-800 text-white transform scale-[1.02]"
                            : "bg-white text-gray-800 hover:bg-blue-50"
                        }`}
                        style={{
                          animation: `fadeIn 0.3s ease-out ${
                            index * 0.05
                          }s both`,
                        }}
                        onClick={() => handleActive(admin.adminId)}
                      >
                        <p className="text-[14px] font-medium">{admin.name}</p>
                        <span
                          className={`px-3 py-1 text-[14px] rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-white text-blue-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {admin.role}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="p-4 text-sm text-gray-500">No users found.</p>
                )}
              </div>
            </div>

            {/* Right: selected admin activity */}
            <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              {selectedAdmin ? (
                <div className="h-full flex flex-col animate-[fadeIn_0.4s_ease-out]">
                  {/* Login Activity */}
                  <div
                    className="border-b border-gray-200 flex flex-row justify-between items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src={loginIcon}
                        className="w-6 h-6"
                        alt="Login Icon"
                      />
                      <span>
                        <p className="text-[16px] font-semibold text-gray-800">
                          Login
                        </p>
                        <p className="text-[14px] text-gray-400">
                          11th June, 2023 . 2:00PM
                        </p>
                      </span>
                    </div>
                    <img
                      src={dropdownIcon}
                      alt="Dropdown Icon"
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Activity Details Table - Aligned with Login */}
                  {dropdown && (
                    <div className="mt-1 px-4 pb-4 animate-[slideDown_0.3s_ease-out] overflow-auto bg-gray-50">
                      {/* <p className="text-sm text-gray-600 mb-4 pt-4">
                        Showing logs for:{" "}
                        <span className="font-semibold text-gray-800">
                          {selectedAdmin.name}
                        </span>
                      </p> */}
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            {headFieldsRow.map((field, index) => (
                              <th
                                key={index}
                                className="bg-[#E1E3E5] p-3 text-left text-[16px] font-bold text-[#1F2937] border-b border-gray-300"
                              >
                                {field}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-3 py-4 border-b border-gray-200 text-[14px] text-[#1F2937]">
                              {selectedAdmin.activityLog.activity}
                            </td>
                            <td className="px-3 py-4 border-b border-gray-200 text-[14px] text-[#1F2937]">
                              {selectedAdmin.activityLog.description}
                            </td>
                            <td className="px-3 py-4 border-b border-gray-200 text-[14px] text-[#1F2937]">
                              {selectedAdmin.activityLog.timeLogged}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Sign Out Activity */}
                  <div className="border-b border-gray-200 flex flex-row justify-between items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex flex-row gap-4 items-center">
                      <img src={signoutIcon} alt="" />
                      <span>
                        <p className="text-[16px] font-semibold text-gray-800">
                          Sign Out
                        </p>
                        <p className="text-[14px] text-gray-400">
                          11th June, 2023 . 2:00PM
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-400 text-sm animate-pulse">
                    Select a user to view activity
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <ReviewApproval onCancel={() => {}} /> */}
      {/* <DeclineApproval /> */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AuditTrail;
