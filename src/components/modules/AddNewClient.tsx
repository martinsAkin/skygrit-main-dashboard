/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
import { type ModulesProps } from "../../interface";


type FormData = {
  mgtType: string;
  clientType: string;
  businessUnit: string;
  clientCategory: string;
  fares: string;
};


const AddNewClient = ({ onCancel }: ModulesProps) => {
  const [formData, setFormData] = useState<FormData>({
    mgtType: "",
    clientType: "",
    businessUnit: "",
    clientCategory: "",
    fares: "",
  });


  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };


  // Conditonal Helpers
  const isSpecific = formData.mgtType === "specific";
  const isGeneral = formData.mgtType === "general";
  const isDirect = formData.clientType === "directSales";
  const isIndirect = formData.clientType === "indirectSales";
  const isCorporate = formData.clientCategory === "corporate";
  const isNonCorporate = formData.clientCategory === "nonCorporate";


  // client type options
  const clientTypeOptions = [
    { label: "Direct Sales", value: "directSales" },
    { label: "Indirect Sales", value: "indirectSales" },
  ];


  const businessUnitOptions = ["Commercial", "Non-Commercial", "Others"];

  // const generateClientName = () => {
  //   const { mgtType, businessUnit, clientType, clientCategory, fares } = formData;

  //   if (!mgtType || !businessUnit || !clientType) return "";

  //   const parts = [mgtType, businessUnit, clientType];

  //   if (clientCategory) parts.push(clientCategory);

  //   if (clientCategory === "nonCorporate" && fares) {
  //     parts.push(fares);
  //   }

  //   return parts.join("_").replace(/\s+/g, "");
  // };

  // const clientName = generateClientName();


  // Reusable Components for input and drop downs
  const InputField = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-1">
      <label className="labelStyling">{label}</label>
      <input className="inputStyling" {...props} />
    </div>
  );


  const SelectField = ({
    label,
    value,
    onChange,
    options,
  }: any) => (
    <div className="flex flex-col gap-1">
      <label className="labelStyling">{label}</label>
      <select
        className="inputStyling"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((opt: any, i: number) => (
          <option key={i} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );


  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-9 w-[518px] rounded-[8px]">


        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[24px] font-[500] text-[#374151]">
              Add New Client
            </h2>
            <p className="text-[11px]">
              Provide required information to create a client
            </p>
          </div>
          <button onClick={onCancel}>✕</button>
        </div>


        {/* Form */}
        <form className="flex flex-col gap-4">


          {/* Management Type */}
          <SelectField
            label="Management Type"
            value={formData.mgtType}
            onChange={(val: string) => handleChange("mgtType", val)}
            options={[
              { label: "Specific", value: "specific" },
              { label: "General", value: "general" },
            ]}
          />


          {/* SPECIFIC */}
          {isSpecific && (
            <>
              <InputField label="Client Name" placeholder="Enter client name" />
              <InputField label="Email Address" placeholder="Enter email" />


              <SelectField
                label="Business Unit"
                value={formData.businessUnit}
                onChange={(val: string) => handleChange("businessUnit", val)}
                options={businessUnitOptions}
              />


              <SelectField
                label="Client Type"
                value={formData.clientType}
                onChange={(val: string) => handleChange("clientType", val)}
                options={clientTypeOptions}
              />
            </>
          )}


          {/* GENERAL */}
          {isGeneral && (
            <>
              <SelectField
                label="Business Unit"
                value={formData.businessUnit}
                onChange={(val: string) => handleChange("businessUnit", val)}
                options={businessUnitOptions}
              />


              <SelectField
                label="Client Type"
                value={formData.clientType}
                onChange={(val: string) => handleChange("clientType", val)}
                options={clientTypeOptions}
              />
            </>
          )}


          {/* CLIENT CATEGORY */}
          {((isSpecific && isDirect) || (isGeneral && isDirect)) && (
            <SelectField
              label="Client Category"
              value={formData.clientCategory}
              onChange={(val: string) =>
                handleChange("clientCategory", val)
              }
              options={[
                { label: "Corporate", value: "corporate" },
                { label: "Non-Corporate", value: "nonCorporate" },
              ]}
            />
          )}

          {(isSpecific && isIndirect) && (
            <>
              <SelectField
                label="Client Category"
                value={formData.clientCategory}
                onChange={() =>
                  handleChange("clientCategory", "corporate")
                }
                options={[
                  { label: "Corporate", value: "corporate" },
                ]}
              />

              {/* <InputField label="Internal Account" placeholder="Enter account" /> */}
            </>
          )}

          {(isGeneral && isIndirect) && (
            <>
              <SelectField
                label="Client Category"
                value={formData.clientCategory}
                onChange={() =>
                  handleChange("clientCategory", "corporate")
                }
                options={[
                  { label: "Corporate", value: "corporate" },
                ]}
              />
              
              {/* <InputField label="Email Address" placeholder="Enter email" />
              <InputField label="Internal Account" placeholder="Enter account" /> */}
            </>
          )}

          {/* CORPORATE */}
          {(isCorporate && isSpecific)? (
            <>
              <InputField label="Internal Account" placeholder="Enter account" />
            </>
          ) : null}

          { (isCorporate && isGeneral) ? (
            <>
              <InputField label="Email Address" placeholder="Enter email" />
              <InputField label="Internal Account" placeholder="Enter account" />
            </>
          ): null}


          {/* NON-CORPORATE */}
          {isNonCorporate && (
            <SelectField
              label="Fares"
              value={formData.fares}
              onChange={(val: string) => handleChange("fares", val)}
              options={[
                { label: "Regular", value: "regular" },
                { label: "Discounted", value: "discounted" },
              ]}
            />
          )}
        </form>


        {/* Buttons */}
        <ModulesBtnSet onCancel={onCancel} text2="Create User" />
      </div>
    </div>
  );
};


export default AddNewClient;