import { useState } from "react";
import type { SubCategory } from "../../interface";


type Props = {
  options: SubCategory[];
};

export default function MultiSelectDropdown({ options }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SubCategory[]>([]);

  const toggleSelect = (item: SubCategory) => {
    const exists = selected.find(s => s.name === item.name);

    if (exists) {
      setSelected(prev => prev.filter(s => s.name !== item.name));
    } else {
      setSelected(prev => [...prev, item]);
    }
  };

  return (
    <div className="relative w-72">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-left
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {selected.length === 0
          ? "Select subcategories"
          : `${selected.length} selected`}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 max-h-60 w-full overflow-auto
                        rounded-lg border border-gray-200 bg-white shadow-lg">
          {options.map(option => {
            const isSelected = selected.some(s => s.id === option.id);

            return (
              <div
                key={option.id}
                onClick={() => toggleSelect(option)}
                className={`flex cursor-pointer items-center justify-between px-4 py-2
                  hover:bg-indigo-50
                  ${isSelected ? "bg-indigo-100" : ""}`}
              >
                <span>{option.name}</span>

                {isSelected && (
                  <span className="text-indigo-600 font-bold">✓</span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selected.map(item => (
            <span
              key={item.id}
              className="flex items-center gap-1 rounded-full bg-indigo-100
                         px-3 py-1 text-sm text-indigo-700"
            >
              {item.name}
              <button
                onClick={() =>
                  setSelected(prev => prev.filter(s => s.id !== item.id))
                }
                className="font-bold hover:text-indigo-900"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
