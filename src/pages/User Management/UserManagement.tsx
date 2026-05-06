import { useState } from "react";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import UserManagementTable from "./components/UserManagementTable";
import FilterAndSearch from "../../components/molecules/FilterAndSearch";
import AddUser from "../../components/modules/AddUser";
import { NavLink } from "react-router-dom";
// import AddRoleUserMgt from "../components/modules/AddRoleUserMgt";

const UserManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);  

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleRefresh = () => {
    setShowForm(false);
    setRefreshKey((prevKey) => prevKey + 1);
  }

  return (
    <div>
      <div className="flex flex-row h-full ">
        <div className="flex flex-col w-full">
          <section className="py-2 px-16 bg-white border-b-[1px] border-b-[#E5E7EB]">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold">User Management</h2>
                <p className="text-[12px] text-[#727372]">
                  Here’s a list of all users on the system
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <NavLink
                  to="/role-management"
                  className="px-3 py-2 bg-[#F5F6F9] rounded-[8px] text-[14px] font-medium"
                >
                  Manage Roles
                </NavLink>
                <button
                  className="flex gap-1.5 flex-row items-center justify-center px-3 py-2 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium  hover:bg-[#1565C0] transition"
                  onClick={handleOpenForm}
                >
                  <img src={addIcon} alt="add" />
                  <p>Add New User</p>
                </button>
              </div>
            </div>

            <div className="p-4 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-6 mt-8">
              <FilterAndSearch />
              <UserManagementTable refreshKey={refreshKey}/>
            </div>
          </section>
        </div>
      </div>

      {showForm && <AddUser onCancel={handleCloseForm} onSuccess={handleRefresh} />}
    </div>
  );
};

export default UserManagement;
