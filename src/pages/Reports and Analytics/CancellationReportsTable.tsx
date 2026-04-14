import { DashboardAnalytics } from "../Dashboard/components/DashboardComponents"
import { Cards } from "../../components/molecules/Cards"
import { useState, useEffect } from "react"


type data = {
  flightNo: string;
  route: string;
  date: string;
  reason: string;
  passengers: string;
  notified: string;
  compensation: string;
};

const CancellationReportsTable = () => {
 const [dummyData, setDummyData] = useState<data[]>([]);
 
  const tableHeaders = [
     "FLIGHT NO",
     "ROUTE",
     "DATE",
     "REASON",
     "PASSENGERS",
     "NOTIFIED",
     "COMPENSATION"
   ];
 
  const placeholderData = [
   {
    flightNo: "401",
    route: "LOS -> ABV",
    date: "2026-01-09",
    reason: "Technical Issue",
    passengers: "142",
    notified: "100%",
    compensation: "Eligible",
   },
   {
    flightNo: "401",
    route: "LOS -> ABV",
    date: "2026-01-09",
    reason: "Technical Issue",
    passengers: "142",
    notified: "100%",
    compensation: "Eligible",
   },
   {
    flightNo: "205",
    route: "ABV -> PHC",
    date: "2026-01-09",
    reason: "Weather",
    passengers: "98",
    notified: "100%",
    compensation: "Not Eligible",
   },
   {
    flightNo: "312",
    route: "LOS -> KAN",
    date: "2026-01-08",
    reason: "Crew Shortage",
    passengers: "156",
    notified: "94%",
    compensation: "Eligible",
   },
   {
    flightNo: "188",
    route: "PHC -> LOS",
    date: "2026-01-08",
    reason: "Operational",
    passengers: "112",
    notified: "100%",
    compensation: "Eligible",
   },
   {
    flightNo: "509",
    route: "KAN -> ABV",
    date: "2026-01-07",
    reason: "Customer Request",
    passengers: "1",
    notified: "100%",
    compensation: "N/A",
   },
   {
    flightNo: "509",
    route: "LOS -> EDO",
    date: "2026-01-17",
    reason: "Customer Request",
    passengers: "1",
    notified: "0%",
    compensation: "N/A",
   },
  ];
 
  useEffect(() => {
   setDummyData(placeholderData);
  }, []);

  return (
    <div>
      <section className="grid grid-cols-4 gap-2">
        <DashboardAnalytics
         analyticHeading="Total Cancellations"
         value="876"
         metrics="+23.1%"
         duration="last month"
         metricColor="red"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Airline-Initiated"
         value="623"
         metrics="+18.4%"
         duration="last month"
         metricColor="red"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Customer-Initiated"
         value="253"
         metrics="+35.2%"
         duration="last month"
         metricColor="grey"
         icon="assets/Container (2).png"
        />
        <DashboardAnalytics
         analyticHeading="Notification Compliance"
         value="96.8%"
         metrics="+2.3%"
         duration="last month"
         metricColor="green"
         icon="assets/Container (2).png"
        />
      </section>
      <section className="border border-gray-100 py-4 px-3 rounded-md mt-3">
       <p className="font-bold mb-2">Cancellations by Reason (Last 30 Days)</p>
       <div className="grid grid-cols-4 items-center gap-2">
        <Cards
         value={245}
         value_color="text-red-400"
         Text="Technical"
        />
        <Cards
         value={178}
         value_color="text-amber-400"
         Text="Weather"
        />
        <Cards
         value={156}
         value_color="text-blue-400"
         Text="Operational"
        />
        <Cards
         value={44}
         value_color="text-gray-400"
         Text="Crew"
        />
       </div>
      </section>

      <section className="p-3 border border-s-stone-500 mt-6 rounded-lg">
       <span className="inline-block my-4 font-bold text-lg">Recent Cancellations</span>
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
          <td className="otherTablesTDstyling">
           SK-{data.flightNo}
          </td>
          <td className="otherTablesTDstyling">
           {data.route}
          </td>
          <td className="otherTablesTDstyling">
           {data.date}
          </td>
          <td className="otherTablesTDstyling">
           {data.reason}
          </td>
          <td className="otherTablesTDstyling">
           {data.passengers}
          </td>
          <td className={`otherTablesTDstyling ${
                    data.notified === "100%"
                      ? "text-green-600"
                      : data.notified === "94%"
                      ? "text-yellow-600"
                      : data.notified === "0%"
                      ? "text-red-700"
                      : "text-black"
                  }`}>
           {data.notified}
          </td>
          <td className="px-2 py-1.5 border-b border-gray-200 text-[13px]">
           {data.compensation}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </section>

    </div>
  )
}

export default CancellationReportsTable;