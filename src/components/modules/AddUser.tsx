/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type { ModulesProps } from "../../interface";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
import { addAdmin } from "../../api/adminService";

const AddUser = ({ onCancel, onSuccess }: ModulesProps) => {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    role: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}))
   }
  
   const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!formData.fullName || !formData.username || !formData.role) {
      alert("Empty form, kindly fill out all inputs");
      return;
    }

    console.log("Submitting user:", formData);

    try {
     await addAdmin(formData)
     alert("User Added successfully!")
     onCancel();
     onSuccess();
     console.log("Form data: ", formData)
    } catch (error: any) {
     console.error("something went wrong:", error.response?.data || error.message)
    }
   }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg px-7 py-6">
        <div className="mb-4">
          <h1 className="text-[25px] text-[#374151]">Add User</h1>
          <span className="text-[12px] text-[#374151]">
            Provide required information to create a user
          </span>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="addUserForm-div">
            <label htmlFor="fullName" className="addUserForm-label">
              Full Name: *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter user full Name"
              className="addUserForm-input"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="addUserForm-div">
            <label htmlFor="email" className="addUserForm-label">
              Email Address: *
            </label>
            <input
              name="username"
              className="addUserForm-input"
              placeholder="enter user email address"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="addUserForm-div">
            <label htmlFor="role" className="addUserForm-label">
              Assign Role: *
            </label>
            <select 
              name="role" 
              id="user_role" 
              value={formData.role}
              onChange={handleInputChange}
              className="addUserForm-input"
              required
            >
              <option value="">Select Role</option>
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <ModulesBtnSet text2="Add User" onCancel={onCancel} />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
