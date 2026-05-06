import { useState, useEffect } from "react";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import prevPage from "/assets/Icons/move-left.png";
import AddRoleUserMgt from "../../../components/modules/AddRoleUserMgt";
import { NavLink } from "react-router-dom";
import axios from "axios";

interface RoleProps {
  name: string;
  permissions: string[];
}

type RolesData = {
  [roleGroup: string]: RoleProps[];
};

const ManageRoles = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // const count = 1

  const [data, setData] = useState<RolesData>({});
  useEffect(() => {
    axios
      .get("/data/Roles.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (Object.keys(data).length === 0) return <div>Loading....</div>;

  return (
    <div className="">
      <section className="py-2 px-16 bg-white border-b-[1px] border-b-[#E5E7EB]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Role Management</h2>
            <p className="text-[12px] text-[#727372]">
              Here’s a list of all Roles on the system
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <NavLink to="/user-management">
              <img
                src={prevPage}
                alt="go back"
                className="inline-block mr-2 h-4 w-4"
              />
              Back
            </NavLink>
            <button
              className="flex gap-1.5 flex-row items-center justify-center px-3 py-2 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium  hover:bg-[#1565C0] transition"
              onClick={handleOpenForm}
            >
              <img src={addIcon} alt="add" />
              <p>Add New Role</p>
            </button>
          </div>
        </div>

        <section className="flex gap-4.5 mt-6">
          {Object.entries(data).map(([roleGroup, rolesArr]) => (
            <div
              key={roleGroup}
              className=" flex flex-col flex-1 py-4 px-7 rounded-lg bg-gray-50 h-max"
            >
              <h3 className="font-semibold text-xl mb-1 text-gray-700">
                {roleGroup.replace(/_/g, " ")}
              </h3>
              <span className="block mb-2 text-lg text-gray-500">
                Total users with this role: {rolesArr.length}
              </span>
              {rolesArr.map((role, index) => (
                <div key={index} className="list-none mt-2">
                  <span className="font-semibold text-gray-600 text-lg">
                    {role.name}
                  </span>
                  <ul className="text-[13px] list-none ml-2 text-gray-700 mb-4">
                    {role.permissions.map((perm, i) => (
                      <li key={i}>{perm}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex gap-2 mt-6">
                <button className="bg-white text-black role-btns">
                  Edit Roles
                </button>
                <button className="bg-[#0D47A1] text-white role-btns">
                  View Users
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>

      {showForm && <AddRoleUserMgt onCancel={handleCloseForm} onSuccess={handleCloseForm} />}
    </div>
  );
};

export default ManageRoles;
