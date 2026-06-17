import { useState } from "react";
import messageChat from "/assets/Icons/materialEmail.svg";
import chat from "/assets/Icons/materialChat.svg";
import phone from "/assets/Icons/fluentPhone.svg";
import { NavLink } from "react-router-dom";
import type { ChannelOption, TemplateStatus, InstantMesasage, InstantNotification } from "../../../interface"
import { createInstantMessage } from "../../../api/notificationService";


const InstantNotificationMessage = () => {
  const [formData, setFormData] = useState<InstantNotification>({
    numberOfPassengers: 10,
    email: true,
    sms: true,
    whatsapp: false,
    subject: "",
    message: "",
    status: "PUBLISHED",
  });

  const resetForm = () => {
    setFormData({
      numberOfPassengers: 0,
      email: false,
      sms: false,
      whatsapp: false,
      subject: "",
      message: "",
      status: "",
    });
  };

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

  const buildPayload = (
    status: TemplateStatus
  ): InstantMesasage => {
    const channels: ChannelOption[] = [];
  
    if (formData.email) channels.push("EMAIL");
    if (formData.sms) channels.push("SMS");
    if (formData.whatsapp) channels.push("WHATSAPP");
  
    return {
      numberOfPassengers: formData.numberOfPassengers,
      channel: channels,
      subject: formData.subject,
      content: formData.message,
      status,
    };
  };
  
  
    const handleSaveDraft = async () => {
    const payload = buildPayload("DRAFT");
    try {
      const res = await createInstantMessage(payload);
      alert("Template saved as draft!");
      console.log("Saved payload:", payload, "Response:", res);
      resetForm();
    } catch (err) {
      console.error("Error saving draft:", err);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email && !formData.sms && !formData.whatsapp) {
      alert("Please select at least one channel");
      return;
    }

    const payload = buildPayload("PUBLISHED");
    try {
      const res = await createInstantMessage(payload);
      alert("Template published successfully!");
      console.log("Published payload:", payload, "Response:", res);
      resetForm();
    } catch (err) {
      console.error("Error publishing template:", err);
    }
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      numberOfPassengers: 0,
      email: false,
      sms: false,
      whatsapp: false,
      subject: "",
      message: "",
      status: "PUBLISHED",
    });
  };

  return (
    <div>
      <div className="py-4 px-16 ">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Engine
          </h2>
          <p className="text-[14px] text-gray-500 mt-1">
            Configure and manage passenger communications across all channels
          </p>
        </div>
        <div className="mt-3">
            <div className="flex gap-16">
              <form
                className="p-6 rounded-lg flex-1"
                onSubmit={handleFormSubmit}
              >
                <section className="flex gap-8">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="text-l font-bold block mb-1"
                    >
                      Number of Passengers
                    </label>
                    <input
                      type="text"
                      name="passengerNumber"
                      id="passengerNumber"
                      className="p-3 bg-blue-100 border border-[#C6C6C6] w-60 rounded-md focus:outline-none cursor-not-allowed"
                      value={formData.numberOfPassengers}
                      readOnly
                      required
                    />
                  </div>
                 </section>

                <section>
                  <div className="mt-4">
                    <label className="text-l font-bold block mb-1">
                      Channel
                    </label>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="email"
                          id="email"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.email}
                          onChange={handleInputChange}
                        />
                        <img src={messageChat} alt="email" />
                        <p>Email</p>
                      </span>
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="sms"
                          id="sms"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.sms}
                          onChange={handleInputChange}
                        />
                        <img src={chat} alt="chat" />
                        <p>SMS</p>
                      </span>
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="whatsapp"
                          id="whatsapp"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                        <img src={phone} alt="phone" />
                        <p>WhatsApp</p>
                      </span>
                    </div>
                  </div>
                </section>

                <div className="mt-4">
                  <label
                    htmlFor="subject"
                    className="text-l font-bold block mb-1"
                  >
                    Subject Line (Email)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your booking is confirmed - {{pnr}}"
                    className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="text-l font-bold block mb-1"
                  >
                    Message Content
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="border border-[#C6C6C6] p-2.5 w-[100%] h-60 rounded-md focus:outline-none"
                    placeholder="Dear {{passenger_name}},&#10;Your booking is confirmed!&#10;PNR: {{pnr}}&#10;Flight: {{flight_number}}&#10;Departure: {{departure_time}}&#10;&#10;Thank you for choosing us!"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="flex gap-2.5 mt-6 justify-end">
                  <NavLink to="/notifications">
                    <button
                      type="button"
                      className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400"
                      onClick={handleCancel}
                    >
                      Back
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400"
                    value={formData.status}
                    onClick={handleSaveDraft}
                  >
                    Save as Draft
                  </button>
                  <button
                    className="p-2.5 rounded-lg text-[13px] bg-blue-900 text-white"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InstantNotificationMessage;
