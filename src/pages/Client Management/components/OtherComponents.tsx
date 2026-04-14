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
