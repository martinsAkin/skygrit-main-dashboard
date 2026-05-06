// import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FilterAndSearch from "../../../components/molecules/FilterAndSearch";
import type { Refund } from "../../../interface";

const RequestRefundDashboard = () => {
  const categories = [
    "All",
    "Pending",
    "In-Progress",
    "Review",
    "Approved",
    "Declined",
  ];

  const headFields = [
    "Request ID",
    "Date",
    "Customer Name",
    "Type",
    "Email",
    "Amount",
    "Refund Value",
    "Status",
    "Actions",
  ];

  const [category, setCategory] = useState("All");
  const [data, setData] = useState<Refund[]>([]);

  useEffect(() => {
    axios
      .get("/data/RequestRefundData.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (data.length === 0)
    return <div>Loading... if this persists, the table has no data</div>;

  const FilteredData =
    category === "All" ? data : data.filter((item) => item.status === category);

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col mb-9">
        <article className="flex flex-row">
          {categories.map((list) => (
            <li
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
            </li>
          ))}
        </article>
      </div>

      <div className="p-2 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-6">
        <FilterAndSearch />
        {/* Date & clear */}
        <div className="flex flex-row gap-4">
          <div className=" bg-[#F1F3F9] p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
            <p className="text-[13px] text-[#09090B] font-normal">
              Date: April 23 - Feb 09, 2025
            </p>
          </div>
          <div className="p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
            <button className="text-[14px] text-[#C77756] font-semibold cursor-pointer">
              Clear filter
            </button>
          </div>
        </div>

        <table className="w-full border-collapse border-b border-[#E5E7EB]">
          <thead>
            <tr>
              {headFields.map((field, index) => (
                <th
                  key={index}
                  className="p-3 text-left text-[10.5px] font-bold text-[#263238] border-b border-gray-200"
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {FilteredData.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-2 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  REQ-{item.id}
                </td>
                <td className="tableRowStyling">
                  {item.date}
                </td>
                <td className="tableRowStyling">
                  {item.customerName}
                </td>
                <td className="tableRowStyling">
                  {item.type}
                </td>
                <td className="tableRowStyling">
                  {item.email}
                </td>
                <td className="tableRowStyling">
                  {item.amount}
                </td>
                <td className="tableRowStyling">
                  {item.refundValue}
                </td>
                <td
                  className={`px-4 py-2 border-b border-gray-200 font-medium text-[12px] ${
                    item.status === "Approved"
                      ? "text-green-600"
                      : item.status === "Pending"
                      ? "text-yellow-600"
                      : item.status === "Declined"
                      ? "text-red-700"
                      : item.status === "In-Progress"
                      ? "text-amber-500"
                      : "text-black"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px]">
                  <Link to={`/details/${item.id}`}>
                    <button className="text-blue-600 hover:underline cursor-pointer">
                      {item.actions}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestRefundDashboard;
