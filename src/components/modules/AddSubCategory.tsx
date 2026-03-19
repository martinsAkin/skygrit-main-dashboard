/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
import type { Category, ModulesProps } from "../../interface";
import { addSubCategory } from "../../api/policyManagementService";
import { useCategoryContext } from "../../hooks/CategoryContext";
import MultiSelectDropdown from "../molecules/MultiSelectDropdown";
import { Categories } from "../../interface";


const AddSubCategory = ({
 onCancel,
 onSuccess,
}:ModulesProps) => {
 const { categories } = useCategoryContext();
 const [formData, setFormData] = useState({
  category: "",
  name: "",
 });

 const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

//  const handleInputChange = (
//   e: React.ChangeEvent<
//    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//   >,
//  ) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));
//  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.name || !formData.category) {
   alert("Empty Selection, kindly select the required fields!");
   return;
  }

  const alreadyExists = categories.some(
   (item) =>
    item.category === formData.category &&
    item.name.trim().toLowerCase() === formData.name.trim().toLowerCase(),
  );

  if (alreadyExists) {
   alert("This sub-category already exists under the selected category.");
   return;
  }


  try {
   await addSubCategory({
    category: formData.category,
    name: formData.name,
   });
   alert("Successful!");
   onCancel();
   onSuccess();
  } catch (e) {
   alert("Error creating a sub-category");
   console.error("error:", e);
  }
 };

//  const fetchsubcategorybycategory = 

 return (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-xl">
   <div className="bg-white p-9 w-[518px] h-[450px] rounded-[8px]">
    <div className="w-full flex flex-col gap-[36px]">
     {/* Header */}
     <div className="flex flex-row items-center justify-between">
      <h2 className="text-[24px] font-[500] text-[#374151]">
       Add Sub Category
      </h2>
      <button className="w-[36px] h-[36px]" onClick={onCancel}>
       <img className="w-full" src="/assets/Icons/Cancel.svg" alt="cancel" />
      </button>
     </div>

     {/* Form */}
     <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2.5">
       <label htmlFor="category" className="text-[16px] font-medium">
        Category
       </label>
       <span className="relative flex flex-col">
        <select
         id="category"
         name="category"
         value={formData.category}
         onChange={(e) => {
            const value = e.target.value;
            setFormData(prev => ({
              ...prev,
              category: value,
            }));
            const category = Categories.find(
              c => c.id === Number(value)
            );
            setSelectedCategory(category || null);
            console.log(selectedCategory);
          }}

         className="w-full h-[52px] border rounded-[8px] px-3 cursor-pointer"
        >
         <option value="">--Select Category--</option>
         {Categories.map((opt) => (
          <option key={opt.id} value={opt.id}>
           {opt.name}
          </option>
         ))}
        </select>
       </span>

       <label htmlFor="subCategory" className="text-[16px] font-medium">
        Sub Category Name
       </label>
       {selectedCategory && (
        <MultiSelectDropdown
          options={selectedCategory.subCategories}
        />
      )}
       <p className="text-[12px] text-[#6B6F80]">
        This will be added to the selected category
       </p>
      </div>
      <ModulesBtnSet text2="Add Sub-Category" onCancel={onCancel} />
     </form>
    </div>
   </div>
  </div>
 );
};

export default AddSubCategory;
