import prevPage from "/assets/Icons/move-left.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface upgradeSetupData {
  id: number;
  upgradeFrom: string;
  upgradeTo: string;
  baseFare: string;
  operatingCarrier: string;
}
const initialUpgrades: upgradeSetupData[] = [
  {
    id: 1,
    upgradeFrom: "Business Class",
    upgradeTo: "First Class",
    baseFare: "8%",
    operatingCarrier: "Airpeace",
  },
  {
    id: 2,
    upgradeFrom: "Economy Class",
    upgradeTo: "First Class",
    baseFare: "20%",
    operatingCarrier: "Ibom Air",
  },
  {
    id: 3,
    upgradeFrom: "Economy Class",
    upgradeTo: "Business Class",
    baseFare: "10%",
    operatingCarrier: "Valuejet",
  },
];

const classOptions = ["Economy Class", "Business Class", "First Class"];
const carrierOptions = [
  "Airpeace",
  "Ibom Air",
  "Valuejet",
  "Air Peace",
  "Dana Air",
];

const UpgradeSetup = () => {
  const upgradeSetupFields = [
    "Upgrade From",
    "Upgrade To",
    "Bare Fare",
    "Operating Carrier",
  ];
  const downloadSetupFields = ["Upgrade From", "Upgrade To", "Bare Fare"];

  const [upgrades, setUpgrades] = useState(initialUpgrades);
  const handleUpdate = (id: number, field: string, value: string) => {
    setUpgrades(
      upgrades.map((upgrade) =>
        upgrade.id === id ? { ...upgrade, [field]: value } : upgrade
      )
    );
  };

  // const handleAddRow = () => {
  //   const newUpgrade = {
  //     id: Math.max(...upgrades.map((u) => u.id)) + 1,
  //     upgradeFrom: "Economy Class",
  //     upgradeTo: "Business Class",
  //     baseFare: "0%",
  //     operatingCarrier: "Airpeace",
  //   };
  //   setUpgrades([...upgrades, newUpgrade]);
  // };
  const handleSave = () => {
    // Implement save logic here, e.g., send data to an API or update state
    console.log("Saved Upgrades:", upgrades);
  };
  const handleDeleteRow = (id: number) => {
    setUpgrades(upgrades.filter((upgrade) => upgrade.id !== id));
  };
  return (
    <>
      <div className="">
        <div className="py-4 px-16 flex flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Upgrade and Downgrade Setup
            </h2>
            <p className="text-[14px] text-gray-500 mt-1">
              Configure Refund and Cancellation Policy
            </p>
          </div>
          <div className="flex gap-4 items-center">
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
          </div>
        </div>

        <section className="max-w-8xl py-4 px-16">
          <div className="px-9 py-2 border border-[#E4E4E7] bg-[#FAFAFA] rounded-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-9">Upgrade Setup</h2>
              <div>
                <table className="w-full border-collapse border-b border-[#E5E7EB]">
                  <thead>
                    <tr>
                      {upgradeSetupFields.map((field, index) => (
                        <th
                          key={index}
                          className="px-9 py-5 text-left text-lg text-[#263238] border-b border-gray-200"
                        >
                          {field}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {upgrades.map((upgrade) => (
                      <tr
                        key={upgrade.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-8 py-4 border-b border-gray-200">
                          <div className="relative">
                            <select
                              value={upgrade.upgradeFrom}
                              onChange={(e) =>
                                handleUpdate(
                                  upgrade.id,
                                  "upgradeFrom",
                                  e.target.value
                                )
                              }
                              className="w-full appearance-none bg-white border border-gray-200 rounded px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                            >
                              {classOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={20}
                              color="black"
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <div className="relative">
                            <select
                              value={upgrade.upgradeTo}
                              onChange={(e) =>
                                handleUpdate(
                                  upgrade.id,
                                  "upgradeTo",
                                  e.target.value
                                )
                              }
                              className="w-full appearance-none bg-white border border-gray-200 rounded px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                            >
                              {classOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={20}
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <input
                            type="text"
                            value={upgrade.baseFare}
                            onChange={(e) =>
                              handleUpdate(
                                upgrade.id,
                                "baseFare",
                                e.target.value
                              )
                            }
                            className="w-full bg-white border border-gray-200 rounded px-6 py-3 text-gray-700 focus:outline-none focus:border-blue-400"
                            placeholder="0%"
                          />
                        </td>
                        <td className="px-8 py- border-b border-gray-200">
                          <div className="relative">
                            <select
                              value={upgrade.operatingCarrier}
                              onChange={(e) =>
                                handleUpdate(
                                  upgrade.id,
                                  "operatingCarrier",
                                  e.target.value
                                )
                              }
                              className="w-full appearance-none bg-white border border-gray-200 rounded px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                            >
                              {carrierOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={20}
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <button
                            onClick={() => handleDeleteRow(upgrade.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-8xl py-4 px-16">
          <div className="px-9 py-2 border border-[#E4E4E7] bg-[#FAFAFA] rounded-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-9">Download Setup</h2>
              <div>
                <table className="w-full border-collapse border-b border-[#E5E7EB]">
                  <thead>
                    <tr>
                      {downloadSetupFields.map((field, index) => (
                        <th
                          key={index}
                          className="px-9 py-5 text-left text-lg text-[#263238] border-b border-gray-200"
                        >
                          {field}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {upgrades.map((upgrade) => (
                      <tr
                        key={upgrade.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-8 py-4 border-b border-gray-200">
                          <div className="relative">
                            <select
                              value={upgrade.upgradeFrom}
                              onChange={(e) =>
                                handleUpdate(
                                  upgrade.id,
                                  "upgradeFrom",
                                  e.target.value
                                )
                              }
                              className="w-full appearance-none bg-white border border-gray-200 rounded px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                            >
                              {classOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={20}
                              color="black"
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <div className="relative">
                            <select
                              value={upgrade.upgradeTo}
                              onChange={(e) =>
                                handleUpdate(
                                  upgrade.id,
                                  "upgradeTo",
                                  e.target.value
                                )
                              }
                              className="w-full appearance-none bg-white border border-gray-200 rounded px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer"
                            >
                              {classOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={20}
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <input
                            type="text"
                            value={upgrade.baseFare}
                            onChange={(e) =>
                              handleUpdate(
                                upgrade.id,
                                "baseFare",
                                e.target.value
                              )
                            }
                            className="w-full bg-white border border-gray-200 rounded px-6 py-3 text-gray-700 focus:outline-none focus:border-blue-400"
                            placeholder="0%"
                          />
                        </td>
                        <td className="px-8 py-4 border-b border-gray-200">
                          <button
                            onClick={() => handleDeleteRow(upgrade.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-row items-center justify-end gap-4 mt-3 mr-16">
          <button className=" px-6 py-2 border border-[#D1D5DB] rounded hover:bg-gray-300">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className=" px-6 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default UpgradeSetup;
