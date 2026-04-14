import { useState, useEffect } from "react"
import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents"

type data = {
  
 pnr: string;
 passenger: string;
 originalflight: string;
 newflight: string;
 type: string;
 classchange: string;
 costimpact: string;
 status: string;
};

const ReroutingReportsTable = () => {
  const [dummyData, setDummyData] = useState<data[]>([]);
    
     const tableHeaders = [
        "PNR",
        "PASSENGER",
        "ORIGINAL FLIGHT",
        "NEW FLIGHT",
        "TYPE",
        "CLASS CHANGE",
        "COST IMPACT",
        "STATUS",
      ];
    
     const placeholderData = [
      {
       pnr: "5001",
       passenger: "Adegbola Abraham",
       originalflight: "401 (LOS-ABJ)",
       newflight: "402 (LOS-ABJ)",
       type: "Upgrade",
       classchange: "Economy -> Business",
       costimpact: "N0",
       status: "Confirmed"
      },
      {
       pnr: "5002",
       passenger: "Jayeoba Oluwanifemi",
       originalflight: "205 (MDG-LOS)",
       newflight: "206 (MDG-LOS)",
       type: "Upgrade",
       classchange: "Economy -> Business",
       costimpact: "N0",
       status: "Confirmed"
      },
      {
       pnr: "5003",
       passenger: "Bello Sadam",
       originalflight: "312 (LOS-KAN)",
       newflight: "313 (LOS-KAN)",
       type: "Downgrade",
       classchange: "Business -> Economy",
       costimpact: "N45,000",
       status: "Pending Refund"
      },
      {
       pnr: "5003",
       passenger: "Ajayi Martins",
       originalflight: "502 (PHC-LOS)",
       newflight: "503 (PHC-LOS)",
       type: "Upgrade",
       classchange: "Economy -> Business",
       costimpact: "N0",
       status: "Confirmed"
      },
      {
       pnr: "5004",
       passenger: "Adekilekun Abdullah",
       originalflight: "509 (LOS-ABV)",
       newflight: "510 (LOS-ABV)",
       type: "Downgrade",
       classchange: "Business -> Economy",
       costimpact: "N50,000",
       status: "Pending Refund"
      },
      {
       pnr: "5005",
       passenger: "Jason Njoku",
       originalflight: "901 (LOS-ABV)",
       newflight: "902 (LOS-ABV)",
       type: "Upgrade",
       classchange: "Economy -> Business",
       costimpact: "N0",
       status: "Confirmed"
      },
      {
       pnr: "5006",
       passenger: "Akindele Moonstone",
       originalflight: "131 (PHC-ABV)",
       newflight: "132 (PHC-ABV)",
       type: "Upgrade",
       classchange: "Economy -> Business",
       costimpact: "N0",
       status: "Confirmed"
      },
     ];
    
     useEffect(() => {
      setDummyData(placeholderData);
     }, []);


  return (
    <div>
      <section className="grid grid-cols-4 gap-2.5">
        <DashboardAnalytics
          analyticHeading="Total Reroutes"
          icon="assets/dollar_sign.svg"
          value="342"
          metrics="+18.6%"
          metricColor="gray"
          duration="month"
        />
        <DashboardAnalytics
          analyticHeading="Upgrades"
          icon="assets/Container.png"
          value="218"
          metrics="+24.3%"
          metricColor="green"
          duration="month"
        />
        <DashboardAnalytics
          analyticHeading="Downgrades"
          icon="assets/dollar_sign.svg"
          value="124"
          metrics="+9.7%"
          metricColor="gray"
          duration="month"
        />
        <DashboardAnalytics
          analyticHeading="Success Rates"
          icon="assets/dollar_sign.svg"
          value="94.3%"
          metrics="+2.1%"
          metricColor="green"
          duration="month"
        />
      </section>

      <section className="flex gap-3 my-5">
       <AnalysisCard 
        title="Upgrade Analysis"
        items={[
         {label: "Total Upgrades", value: 218},
         {label: "Operational Cost", value: "N0", valueColor: "danger"},
         {label: "Customer Satisfaction", value: "98.5%", valueColor: "success"},
         {label: "Average Wait Time", value: "12 mins", valueColor: "default"}
        ]}
       />
       <AnalysisCard 
        title="Downgrade Compensation"
        items={[
         {label: "Total Downgrades", value: 124},
         {label: "Total Refunds", value: "N4.8M", valueColor: "danger"},
         {label: "Pending Refunds", value: 18, valueColor: "pending"},
         {label: "Avg Refund Amount", value: "N38,700", valueColor: "default"}
        ]}
       />   
      </section>

      <table className="w-full border-collapse border border-gray-200 mb-6 text-sm rounded-lg">
       <thead className="bg-gray-100 rounded-lg">
          <tr>
            {tableHeaders.map((field, index) => (
              <th
                key={index}
                className="tableheader"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
       <tbody className="px-4 py-2">
        {dummyData.map((data, index) => (
         <tr key={index}>
          <td className="reroutingTDstyling">
           RRT-{data.pnr}
          </td>
          <td className="reroutingTDstyling">
           {data.passenger}
          </td>
          <td className="reroutingTDstyling">
           SK-{data.originalflight}
          </td>
          <td className="reroutingTDstyling">
           SK-{data.newflight}
          </td>
          <td className={`reroutingTDstyling ${
                    data.type === "Upgrade"
                      ? "text-green-600"
                      : data.type === "Downgrade"
                      ? "text-yellow-600" 
                      : "text-black"
                  }`}>
           <div className={`p-2 rounded-lg w-17 text-center text-[10px] ${
            data.type === "Downgrade" 
            ? "bg-amber-200"
            : data.type === "Upgrade"
            ? "bg-green-300"
            : "bg-black"
           }`}>
            {data.type}
            </div>
          </td>
          <td className="reroutingTDstyling">
           {data.classchange}
          </td>
          <td className="reroutingTDstyling">
           {data.costimpact}
          </td>
          <td className={`px-2 py-1.5 border-b border-gray-200 text-[12.5px] ${
            data.status === "Confirmed"
            ? "text-green-500"
            : "text-amber-500"
          }`}>
           {data.status}
          </td>
         </tr>
        ))}
       </tbody>
      </table>

    </div>
  )
}

export default ReroutingReportsTable




//components
type AnalysisItem = {
 label: string;
 value: string | number;
 valueColor?: "default" | "success" | "danger" | "pending";
}

type AnalysisCardProps = {
 title: string;
 items: AnalysisItem[];
}

export const AnalysisCard = ({title, items}: AnalysisCardProps) => {

 const determineColor = (color?: AnalysisItem["valueColor"]) => {
  switch (color) {
   case "success":
    return "text-green-500"
   case "danger":
    return "text-red-500"
   case "pending":
    return "text-amber-500"
   default:
    return "text-gray-700"
  }
 };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-full">
     <h3 className="text-lg font-semibold text-gray-800 mb-4">
      {title}
     </h3>

     <div className="space-y-4">
       {items.map((item, index) => (
        <div 
         key={index}
         className="flex items-center justify-between border-b border-gray-400 last:border-b-0 pb-3 last:pb-0"
        >
          <span className="text-sm font-medium text-gray-500">
           {item.label}
          </span>
          <span className={`text-sm font-bold ${determineColor(item.valueColor)}`}>
            {item.value}
          </span>
        </div>
       ))}
     </div>
    </div>
  )
}
