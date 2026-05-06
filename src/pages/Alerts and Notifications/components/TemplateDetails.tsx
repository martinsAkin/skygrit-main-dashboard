import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { NotificationTemplate } from "../../../interface";
import { fetchNotificationTemplates } from "../../../api/notificationService";
import TemplateDetailsComponent from "./TemplateDetailsComponent";
import prevPage from "/assets/Icons/move-left.png";
import { NavLink } from "react-router-dom";

// import React from 'react'
type info = {
  version: number | string;
};

const TemplateDetails = ({version}: info) => {

  const {id} = useParams<{id: string}>();
  const [template, setTemplate] = useState<NotificationTemplate | null>(null);

  useEffect(() => {
     if (!id || isNaN(Number(id))) return;

     const numericId = Number(id);

    fetchNotificationTemplates().then((templates) => {
      const found = templates.find((t) => t.id === numericId);
      setTemplate(found || null);
    }).catch((error) => {console.error("Error fetching template by ID:", error);});
  }, [id]);

  console.log("Template fetched:", template);

  if (!template) {
    return <p>Loading template...</p>;
  }

  return (
    <div className="">
      <div className="py-4 px-16 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Booking Confirmation
          </h2>
          <span className="flex flex-row gap-6 mt-1">
            <p className="text-lg text-gray-500 mt-1">Category: {template.category}</p>
            <p className="text-lg text-gray-500 mt-1">Version: {version}</p>
            <p className="text-lg text-gray-500 mt-1">Updated: {new Date(template.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}</p>
          </span>
        </div>
        <div>
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
        </div>
      </div>
      <TemplateDetailsComponent template={template} />
    </div>
  );
};

export default TemplateDetails;
