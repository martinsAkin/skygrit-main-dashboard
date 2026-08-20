import { FilterOnly } from '../../../components/molecules/FilterAndSearch'
import searchIcon from "/assets/Icons/Search.svg";
import refreshIcon from "/assets/Icons/refresh-2.png";
import downIcon from "/assets/Icons/Down.png";
import { useEffect, useState } from 'react';
import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import { useNavigate } from 'react-router-dom';
import type { client_data, MenuUserMgtProps } from '../../../interface';
import axios from 'axios';


const Menu = ({onView, onEdit, onDeactivate, onDelete, onClose}: MenuUserMgtProps) => {
  return (
      <ol className="absolute p-1.5 rounded-lg top-0 bg-white z-50" onMouseLeave={onClose}>
         <li className="userMgtLi" onClick={onView}>View</li>
         <li className="userMgtLi" onClick={onEdit}>Edit</li>
         <li className="userMgtLi" onClick={onDeactivate}>Deactivate</li>
         <li className="userMgtLi-delete" onClick={onDelete}>Delete</li>
       </ol>
  )
}

const AllClients = () => {

  const [dummyData, setDummyData] = useState<client_data[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navigate = useNavigate();
  
  
  const tableHeaders = [
    "Client ID",
    "Client Name",
    "Internal Account",
    "Email",
    "Type",
    "Business Unit",
    "Category",
    "Fares",
    "Last Updated",
    "Status",
    ""
  ];

  const handleView = (id: number) => {
    console.log("viewing user:", id);
    navigate(`/clients/${id}`);
    setOpenMenu(null);
  };

 const handleEdit = (id: number) => {
  console.log("Edit user:", id);
  navigate(`/edit-client/${id}`);
  setOpenMenu(null);
 };

 const handleDeactivate = (id: number) => {
  console.log("deactivate user:", id);
  setOpenMenu(null);
 };

 const handleDelete = (id: number) => {
  console.log("Delete user:", id);
  setOpenMenu(null);
 };

 useEffect(() => {
  axios.get("/data/ClientData.json").then((response) => setDummyData(response.data)).catch((error) => console.error(error))
 }, []);

  return (
    <div>
      <section className="p-3 border border-s-stone-500 mt-6 rounded-lg flex flex-col items-center">
      <div className='flex justify-between my-3.5 w-full'>
       <div className='flex gap-6'>
        <FilterOnly />
        <div className="flex flex-row px-2 py-2 gap-1.5 bg-[#E5E7EB] border-[1px] border-[#DCDEE6] rounded-[4px] items-center w-45">
           <img src={searchIcon} alt="" />
           <input
             className="outline-0 text-[12px] font-medium bg-transparent"
             type="text"
             name="search"
             placeholder="Search with user ID"
           />
         </div>
       </div>

       <div className="flex flex-row gap-3">
           <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
             <img src={refreshIcon} alt="" />
             <p className="text-[14px] font-medium text-[#121212]">
               Refresh
             </p>
           </div>
           <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
             <p className="text-[14px] font-medium text-[#121212]">
               Download
             </p>
             <img src={downIcon} alt="icon" />
           </div>
         </div>
       </div>
      <table className="w-[97%] mb-6 text-sm rounded-2xl">
       <thead>
          <tr>
            {tableHeaders.map((field, index) => (
              <th
                key={index}
                className="p-3 text-left text-[12.5px] text-[#263238] border-b border-gray-200"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
       <tbody className="px-4 py-2">
        {dummyData.map((data, index) => (
         <tr key={index}>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           REQ-{data.clientId}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           {data.clientName}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           {data.internalAcc}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           {data.email}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[10px] text-[#263238] ${
                    data.type === "Direct Sales"
                      ? "text-green-600"
                      : data.type === "Indirect Sales"
                      ? "text-blue-600"
                      : "text-black"
                  }`}>
                    <div className={`p-1 rounded-lg w-17 text-center text-[10px] ${
                      data.type === "Direct Sales" 
                      ? "bg-green-200"
                      : data.type === "Indirect Sales"
                      ? "bg-blue-200 w-max"
                      : "bg-black"
                    }`}>
                      {data.type}
                      </div>
            </td>
            <td className={`px-2 py-1.5 border-b border-gray-200 text-[10px] text-[#263238] ${
                    data.businessUnit === "Commercial"
                      ? "text-[#0E7E92]"
                      : data.businessUnit === "Non-Commercial"
                      ? "text-[#A82121]"
                      : data.businessUnit === "Others"
                      ? "text-[#111827]"
                      : "text-black"
                  }`}>
                    <div className={`p-1 rounded-lg w-17 text-center text-[10px] ${
                      data.businessUnit === "Commercial" 
                      ? "bg-[#DEFAFF]"
                      : data.businessUnit === "Non-Commercial"
                      ? "bg-[#FFE1E1] w-max"
                      : data.businessUnit === "Others"
                      ? "bg-[#F1F1F1]"
                      : "bg-black"
                    }`}>
                      {data.businessUnit}
                      </div>
            </td>
            <td className={`px-2 py-1.5 border-b border-gray-200 text-[10px] text-[#263238] ${
                    data.category === "Corporate"
                      ? "text-[#92400E]"
                      : data.category === "Non-Corporate"
                      ? "text-[#6B21A8]"
                      : "text-black"
                  }`}>
                    <div className={`p-1 rounded-lg w-17 text-center text-[10px] ${
                      data.category === "Corporate" 
                      ? "bg-[#DEFAFF]"
                      : data.category === "Non-Corporate"
                      ? "bg-[#F3E8FF] w-max"
                      : "bg-black"
                    }`}>
                      {data.category}
                      </div>
            </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           {data.fares}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238]">
           {data.lastUpdated}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[11px] text-[#263238] ${
                    data.status === "Active"
                      ? "text-green-600"
                      : data.status === "Inactive"
                      ? "text-yellow-600"
                      : "text-black"
                  }`}>
           {data.status}
          </td>
          <td className="px-4 py-2 border-b border-gray-200 relative">
        <button
         className="cursor-pointer"
         onClick={() =>
          setOpenMenu(openMenu === data.id ? null : data.id)
         }
        >
         <img src={menuOptIcon} alt="menu" title="menu" />
        </button>
        {openMenu === data.id && (
         <div className="absolute right-5 top-5">
          <Menu
            onView={() => handleView(data.id)}
           onEdit={() => handleEdit(data.id) }
           onDeactivate={() => handleDeactivate(data.id)}
           onDelete={() => handleDelete(data.id)}
           onClose={() => setOpenMenu(null)}
          />
         </div>
        )}
       </td>
         </tr>
        ))}
       </tbody>
      </table>
     </section>
     
    </div>
  )
}

export default AllClients