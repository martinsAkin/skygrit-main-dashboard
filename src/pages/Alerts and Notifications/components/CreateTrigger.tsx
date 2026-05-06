// import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import prevPage from "/assets/Icons/move-left.png";

const CreateTrigger = () => {
  const [formData, setFormData] = useState({
    name: "",
    triggerType: "",
    template: "",
    event: "",
    email: false,
    sms: false,
    whatsapp: false,
  });
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      name: "",
      triggerType: "",
      template: "",
      event: "",
      email: false,
      sms: false,
      whatsapp: false,
    });
  };

  return (
    <div className="py-4 px-16 ">
      <section className="flex justify-between mt-6">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Engine
          </h2>
          <span className="text-[14px] text-gray-500 mt-1">
            Configure and manage passenger communications across all channels
          </span>
        </div>
        <NavLink to="/notifications">
          <button className="bg-white text-blue-950 rounded-md px-3.5 py-0 text-md">
            <img
              src={prevPage}
              alt="go back"
              className="inline-block mr-2 h-[20px] w-[20px]"
            />
            Back
          </button>
        </NavLink>
      </section>

      <section>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Trigger Rule
          </h2>
          <div className="border border-[#DCDEE6] rounded-lg max-w-6xl">
            <div className="flex">
              <form
                className="border border-[#E5E7EB] p-6 rounded-lg flex-1"
                onSubmit={handleFormSubmit}
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="text-xl font-medium block mb-2"
                  >
                    Rule Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Rule Name"
                    className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <section className="flex gap-8 mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="triggerType"
                      className="text-xl font-medium block mb-2"
                    >
                      Trigger Type
                    </label>
                    <select
                      name="triggerType"
                      id="triggerType"
                      value={formData.triggerType}
                      onChange={handleInputChange}
                      className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="BOOKING">Booking</option>
                      <option value="FLIGHT_STATUS">Flight Status</option>
                      <option value="CHECK_IN">Check-in</option>
                      <option value="PROMOTIONAL">Promotional</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="template"
                      className="text-xl font-medium block mb-2"
                    >
                      Template
                    </label>
                    <select
                      name="template"
                      id="template"
                      value={formData.template}
                      onChange={handleInputChange}
                      className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="BOOKING">Booking</option>
                      <option value="FLIGHT_STATUS">Flight Status</option>
                      <option value="CHECK_IN">Check-in</option>
                      <option value="PROMOTIONAL">Promotional</option>
                    </select>
                  </div>
                </section>
                <div className="w-full">
                  <label
                    htmlFor="event"
                    className="text-xl font-medium block mb-2"
                  >
                    Event / Timing
                  </label>
                  <select
                    name="event"
                    id="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="BOOKING">Booking</option>
                    <option value="FLIGHT_STATUS">Flight Status</option>
                    <option value="CHECK_IN">Check-in</option>
                    <option value="PROMOTIONAL">Promotional</option>
                  </select>
                </div>

                <section>
                  <div className="mt-6">
                    <label className="text-xl font-medium block mb-4">
                      Delivery Channels
                    </label>
                    <div className="flex flex-col gap-4">
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="email"
                          id="email"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.email}
                          onChange={handleInputChange}
                        />
                        <p>Email (Primary)</p>
                      </span>
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="sms"
                          id="sms"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.sms}
                          onChange={handleInputChange}
                        />

                        <p>SMS (Fallback if email fails)</p>
                      </span>
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="whatsapp"
                          id="whatsapp"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.whatsapp}
                          onChange={handleInputChange}
                        />

                        <p>WhatsApp (Fallback if SMS fails)</p>
                      </span>
                    </div>
                  </div>
                </section>

                <div className="flex gap-2.5 mt-6 justify-end">
                  <NavLink to="/notifications">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400"
                    >
                      Cancel
                    </button>
                  </NavLink>

                  <button
                    className="p-2.5 rounded-lg text-[13px] bg-blue-900 text-white"
                    type="submit"
                  >
                    Save Trigger Rule
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTrigger;
