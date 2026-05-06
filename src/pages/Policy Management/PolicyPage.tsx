/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, NavLink } from "react-router-dom";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import {
  FlightTypeToggle,
  PolicyDetails,
  SearchPolicy,
} from "./components/PolicyComponents";
// import TicketTable from '../components/PolicyComponents'
import { useState } from "react";
// import flightPolicies from "../public/data/FlightPolicyType.json";
// import flightPolicies from "/data/FlightPolicyType.json?url";
import type { Policy, FlightType } from "../../interface";

const PolicyPage: React.FC = () => {
  const [selectedFlightType, setSelectedFlightType] =
    useState<FlightType | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  // const [flightPolicies, setFlightPolicies] =
  // useState<Record<FlightType, Policy[]>>({
  //   Domestic: [],
  //   International: [],
  //   Regional: [],
  // });
  
  const handleFlightTypeClick = (type: FlightType) => {
    setSelectedFlightType(type);
  };

  const handlePolicyClick = (policy: Policy) => {
    setSelectedPolicy(policy);
  };
  // const currentPolicies: Policy[] =
  //   selectedFlightType && Array.isArray(flightPolicies[selectedFlightType])
  //     ? flightPolicies[selectedFlightType]
  //     : [];

  return (
    <div>
      <main className="">
        <section>
          <div className="py-4 px-16 flex flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Policy Management
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Configure Refund and Cancellation Policy
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-[15px] text-[#0D47A1] font-semibold">
                <NavLink to="/upgrade-setup">
                  Upgrade and Downgrade Setup
                </NavLink>
              </span>
              <button className="flex gap-1.5 flex-row items-center justify-center px-4 py-2.5 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium  hover:bg-[#1565C0] transition">
                <img src={addIcon} alt="add" />
                <NavLink to="/create-policy">New Policy</NavLink>
              </button>
            </div>
          </div>
        </section>
        <Outlet />

        <div className="flex gap-[1rem]">
          <section className="flex">
            <SearchPolicy
              selectedFlightType={selectedFlightType}
              selectedPolicy={selectedPolicy}
              onSelectPolicy={handlePolicyClick}
            />
          </section>

          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#EFF6FF] px-4 py-1 flex rounded-full w-max gap-4">
              <FlightTypeToggle
                selectedFlightType={selectedFlightType}
                onSelect={handleFlightTypeClick}
              />
            </div>

            <section>
              <PolicyDetails
                selectedPolicy={selectedPolicy}
                selectedFlightType={selectedFlightType}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolicyPage;
