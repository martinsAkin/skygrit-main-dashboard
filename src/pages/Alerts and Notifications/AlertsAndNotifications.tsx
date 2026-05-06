import { useState } from "react";
// import { NavLink } from "react-router-dom";
import AlertAndNotificationComponents from "./components/AlertAndNotificationComponents";
import TriggerAndRulesContent from "./components/TriggerAndRulesContent";
import DeliveryAndAnalyticsContent from "./components/DeliveryAndAnalyticsContent";
import ChannelsContent from "./components/ChannelsContent";
import { Link } from "react-router";


const AlertsAndNotifications = () => {
  const categories = [
    "Templates",
    "Trigger & Rules",
    "Delivery & Analytics",
    "Channel Settings",
  ];
  const [category, setCategory] = useState("Templates");
  // const FilteredData =
  //   category === "Templates"
  //     ? data
  //     : data.filter((item) => item.status === category);
  return (
    <div className="w-full ">
      <div className="px-6 flex flex-col gap-9">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Notification Engine
            </h2>
            <p className="text-[14px] text-gray-500 mt-1">
              Configure and manage passenger communications across all channels
            </p>
          </div>
          <Link to={`/instant-notification`}>
              <button className="bg-transparent border border-blue-600 text-blue-600 p-2.5 text-sm rounded-lg cursor-pointer">Instant Notification</button>
          </Link>
        </div>
        <div className="flex flex-col mb-4">
          <article className="flex flex-row">
            {categories.map((list) => (
              <ul
                key={list}
                className={`p-4 text-[14px] border-b-[1px] border-b-[#E5E7EB] cursor-pointer list-none
                            ${
                              category === list
                                ? "text-[#202223] font-semibold relative"
                                : "text-[#6E767A]"
                            }`}
                onClick={() => setCategory(list)}
              >
                {list}
                {category === list && (
                  <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
                )}
              </ul>
            ))}
          </article>
        </div>

        <div>
          {category === "Trigger & Rules" ? (
            <TriggerAndRulesContent />
          ) : category === "Delivery & Analytics" ? (
            <DeliveryAndAnalyticsContent />
          ) : category === "Templates" ? (
            <AlertAndNotificationComponents />
          ) : (
            <ChannelsContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertsAndNotifications;
