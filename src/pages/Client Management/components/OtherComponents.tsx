import { useState } from "react"


type Options = {
 option: string
}
export const ResolutionOptions = ({option}: Options) => {
 const [ checked, setChecked ] = useState(false);

  return (
    <div className={`w-48 py-3 border rounded-lg ${
     checked ? "border-blue-700 bg-blue-300" : "border-gray-300"
    }`}>
      <div className="flex gap-2 justify-center items-center">
        <input 
         type="checkbox" 
         name={option || ""} 
         id={option || ""} 
         checked={checked}
         onChange={(e) => {setChecked(e.target.checked)}}
        />
        <span>{option}</span>
      </div>
    </div>
  )
}

type RefundWorkflowProps = {
  value: string;
  selected: string;
  setSelected: (value: string) => void;
  title: string;
  description: string;
}
export const RefundWorkflowOptions = ({
  value,
  selected,
  setSelected,
  title,
  description
}:RefundWorkflowProps) => {

  const isSelected = selected === value;

  return (
      <div 
        onClick={() => setSelected(value)}
        className={`w-full p-4 border rounded-lg cursor-pointer transition-all ${ 
          isSelected ? 
          "border-blue-700 bg-blue-300" 
          : "border-gray-300"
      }`}>
          <div className="flex gap-3 items-start">
            <input
              type="radio"
              name="workflow"
              id="semi-automated"
              checked={isSelected}
              onChange={() => setSelected(value)}
              className="mt-1.5"
            />
            
            <div className="flex flex-col items-left">
              <h2>{title}</h2>
              <span className="text-[11px] text-gray-500">{description}</span>
            </div>
          </div>
    </div>
  )
}


type OtherProps = {
  option: string;
  checkbox: boolean;
  title: string;
  description: string;
  selectedMethod: string;
  setSelectedMethod: (value: string) => void;
}


export const OtherComponents = ({ checkbox, title, description, option, selectedMethod, setSelectedMethod }: OtherProps) => {
  const [ checked, setChecked ] = useState(false);

  const isSelected = selectedMethod === option;

  return (
    <div className="w-full">
      {
        checkbox ?
          <div className={`w-full border p-4 rounded-lg cursor-pointer transition-all ${
          checked ? "border-blue-700 bg-blue-300" : "border-gray-300"
          }`}>
            <div className="flex gap-3 items-start">
              <input
                type="checkbox" 
                name={option || ""} 
                id={option || ""} 
                checked={checked}
                onChange={(e) => {setChecked(e.target.checked)}}
                className="mt-1.5"
              />
              
              <div className="flex flex-col items-left">
                <h2>{title}</h2>
                <span className="text-[11px] text-gray-500">{description}</span>
              </div>
            </div>
          </div>
        : 
        <div 
          onClick={() => setSelectedMethod(option)}
          className={`w-full p-4 border rounded-lg cursor-pointer transition-all ${ 
          isSelected ? 
          "border-blue-700 bg-blue-300" 
          : "border-gray-300"
        }`}>
            <div className="flex flex-col gap-1 justify-center items-center text-center">
                <h2>{title}</h2>
                <span className="text-[11px] text-gray-500">  {description}
                </span>
            </div>
          </div>
      }
    </div>
  )
}






import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({ label, error, id, className, ...inputProps }: FormFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        id={fieldId}
        className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 ${
          error ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"
        } ${className ?? ""}`}
        {...inputProps}
      />
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}




import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label: string;
  options: SelectOption[];
  placeholder: string;
  error?: string;
}

export function SelectField({
  label,
  options,
  placeholder,
  error,
  id,
  className,
  ...selectProps
}: SelectFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <select
        id={fieldId}
        className={`mt-2 w-full appearance-none rounded-lg border bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2364748b%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_0.85rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-slate-800 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 ${
          error ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"
        } ${className ?? ""}`}
        {...selectProps}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}