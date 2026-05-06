import { NavLink } from "react-router-dom";
import prevPage from "/assets/Icons/move-left.png";
import { useNavigate } from "react-router-dom";
import { createNewPolicy } from "../../../api/policyManagementService";
import { useState } from "react";

const CreatePolicy = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cabinType: "",
    name: "",
    description: "",
    status: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createNewPolicy(formData);
      alert("Policy created successfully!");
      console.log("Form data: ", formData);
      navigate("/policy-management");
    } catch (error: any) {
      console.error(
        "something went wrong:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="py-4 px-16 ">
      <section className=" flex justify-between mt-6">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold text-gray-800">
            Policy Management
          </h2>
          <span className="text-[14px] text-gray-500 mt-1">
            Configure Refund and Cancellation Policy
          </span>
        </div>

        <button className="bg-white text-blue-950 rounded-md px-3.5 py-0 text-md">
          <NavLink to="/policy-management">
            <img
              src={prevPage}
              alt="go back"
              className="inline-block mr-2 h-[20px] w-[20px]"
            />
            Back
          </NavLink>
        </button>
      </section>

      <span className="text-2xl font-bold inline-block mt-9 mb-6">
        Create New Policy
      </span>

      <div className="flex gap-16">
        <form
          className="border border-[#E5E7EB] p-3.5 rounded-lg flex-1"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="policyName"
              className="text-lg font-medium block mb-2"
            >
              Policy Name*
            </label>
            {/* <input
       type="text"
       name="policyName"
       id="policyName"
       className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
       placeholder="Enter policy name"
       value={formData.name}
       onChange={handleInputChange}
      /> */}
            <input
              type="text"
              name="name"
              placeholder="Enter policy name"
              className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <section className="flex gap-8">
            <div className="w-[50%]">
              <label
                htmlFor="cabinType"
                className="text-lg font-medium block mb-2"
              >
                Cabin Type
              </label>
              <select
                name="cabinType"
                id="cabinType"
                value={formData.cabinType}
                onChange={handleInputChange}
                className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
              >
                <option value="">Select Cabin Type</option>
                <option value="ECONOMY">Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST_CLASS">First Class</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label
                htmlFor="cabinType"
                className="text-lg font-medium block mb-2"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleInputChange}
                className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
              >
                <option value="">Select Policy Status</option>
                <option value="INACTIVE">Inactive</option>
                <option value="ACTIVE">Active</option>
              </select>
            </div>
          </section>

          <div className="mt-4">
            <label
              htmlFor="descText"
              className="text-lg font-medium block mb-2"
            >
              Description*
            </label>
            <textarea
              name="description"
              id="description"
              className="border border-[#C6C6C6] p-2.5 w-[100%] h-36 rounded-md focus:outline-none"
              placeholder="Enter policy description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="flex gap-2.5 mt-6">
            <button className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400">
              Cancel
            </button>
            <button
              className="p-2.5 rounded-lg text-[13px] bg-blue-900 text-white"
              type="submit"
            >
              Create Policy
            </button>
          </div>
        </form>
        <section className="p-6 bg-[#F1F7FF] rounded-lg h-fit">
          <div className="flex flex-col gap-6">
            <span>
              <h3 className="text-lg text-[#111827] font-semibold mb-2">
                Policy Template
              </h3>
              <p className="text-sm font-medium text-[#111827]">
                Download and upload policy template
              </p>
            </span>
            <button className="flex items-center w-full py-2 justify-center border border-[#DCDEE6] rounded-md gap-2">
              <p className="text-lg font-semibold">Download Template</p>
              <span>
                <img src="/assets/download-rounded.svg" alt="download" />
              </span>
            </button>

            <div className="flex flex-col p-9    border border-dashed border-[#0D47A1] rounded-md text-center gap-2">
              <span
                className="flex items-center gap-2 text-lg text-[#475467] cursor-pointer"
                onClick={() => alert("Downloading file......")}
              >
                <button>
                  {" "}
                  <img src="/assets/image_upload.svg" alt="upload" />
                </button>
                <p className="text-lg text-[#0D47A1] font-semibold">
                  Click to upload
                </p>{" "}
                or drag and drop
              </span>
              <span className="text-sm text-[#475467] font-semibold ">
                SVG, PNG, JPG or PDF (max. 800x400px)
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreatePolicy;
