// import React from 'react'
import prevPage from "/assets/Icons/move-left.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Advanced from "./channelSettingsComponents/Advanced";
import WebhookContent from "./channelSettingsComponents/WebhookContent";
import SettingContent from "./channelSettingsComponents/SettingContent";
// import { Webhook } from "lucide-react";
const ChannelSettings = () => {
  const [category, setCategory] = useState("Settings");
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
        <NavLink to="/notifications/">
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
      <div className="mt-6">
        <div className="flex gap-3 items-center w-full">
          <img
            src="/assets/Icons/email.svg"
            alt="email"
            className="max-w-18 h-auto"
          />
          <span>
            <p className="text-2xl font-bold">Email Configuration</p>
            <p className="text-lg text-gray-600">Provider:SendGrid</p>
          </span>
        </div>
        <section className="mt-4 flex gap-6">
          <div className="border border-gray-300 rounded-xl flex-2">
            <ul className="flex flex-row p-2 border-b border-b-gray-300">
              {["Settings", "Advanced", "Webhooks"].map((list) => (
                <li
                  key={list}
                  className={`p-4 text-[14px] cursor-pointer list-none relative
                            ${
                              category === list
                                ? "text-[#202223] font-semibold"
                                : "text-[#6E767A]"
                            }`}
                  onClick={() => setCategory(list)}
                >
                  {list}
                  {category === list && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
                  )}
                </li>
              ))}
            </ul>
            {/*Setting category List */}
            <div className="mt-4">
              {category === "Settings" ? (
                <SettingContent />
              ) : category === "Advanced" ? (
                <Advanced />
              ) : (
                <WebhookContent />
              )}
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <div className="flex flex-col">
              <div className="border border-gray-300 rounded-lg">
                <div className="p-4 border-b border-gray-300">
                  <h3 className="text-xl">Connection Test</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <label htmlFor="">Test Recipient</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email@example.com"
                      className="p-4 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none mt-4"
                      required
                    />
                    <button
                      className="p-3 w-full rounded-lg text-[16px} bg-[#0D47A1] text-white"
                      type="submit"
                    >
                      Send Test Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border border-gray-300 rounded-lg">
                <div className="p-4 border-b border-gray-300">
                  <h3 className="text-xl">Quick Stats</h3>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <span>
                    <p className="text-sm text-gray-400">Messages Sent (24h)</p>
                    <h3 className="text-lg font-medium">8,234</h3>
                  </span>
                  <span>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <h3 className="text-lg font-medium text-green-500">
                      99.1%
                    </h3>
                  </span>
                  <span>
                    <p className="text-sm text-gray-400">Avg Response Time </p>
                    <h3 className="text-lg font-medium text-blue-800">2.3s</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChannelSettings;
