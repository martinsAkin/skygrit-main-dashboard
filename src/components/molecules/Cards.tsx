interface CardsProps { 
 value: number;
 value_color: string;
 Text: string;
}

export const Cards = ({value, value_color, Text}:CardsProps) => {
  return (
    <section className="bg-gray-200 rounded-lg text-center w-full py-3">
      <div className="flex items-center gap-1.5 flex-col">
       <span className={`${value_color} text-2xl inline-block`}>
        {value}
       </span>
       <span className="text-[13px] inline-block">
        {Text}
       </span>
      </div>
    </section>
  )
}


interface RefundCardProps {
 value: string;
 value_color: string;
 purpose: string;
 rate: string;
}

export const RefundCard = ({value, value_color, purpose, rate}:RefundCardProps) => {
 return(
  <section className="bg-gray-200 rounded-lg w-full py-3 pl-4">
      <div className="flex items-left gap-1 flex-col text-gray-600">
       <span className={`${value_color} text-2xl inline-block`}>
        {value}
       </span>
       <span className="text-[13px] inline-block">
        {purpose}
       </span>
       <span className="text-[13px] inline-block">
        {rate} of total
       </span>
      </div>
    </section>
 )
}



// Channel Effectiveness card in Communication tab
type AnalysisItem = {
 label: string;
 value: string | number;
 valueColor?: "default" | "sms" | "email" | "pushNotif" | "inApp";
}

type AnalysisCardProps = {
 title: string;
 items: AnalysisItem[];
}

export const ChannelEffectivenessCard = ({title, items}: AnalysisCardProps) => {

 const determineColor = (color?: AnalysisItem["valueColor"]) => {
  switch (color) {
   case "sms":
    return "text-green-500"
   case "email":
    return "text-blue-500"
   case "pushNotif":
    return "text-amber-500"
   case "inApp":
    return "text-gray-500"
   default:
    return "text-black"
  }
 };

  return (
    <div className="bg-gray-100 rounded-xl border border-gray-200 py-4 px-3 w-full">
     <h3 className="text-[13px] font-semibold text-gray-800 mb-2">
      {title}
     </h3>

     <div className="space-y-1">
       {items.map((item, index) => (
        <div 
         key={index}
         className="flex items-center justify-between"
        >
          <span className="text-[12px] font-medium text-gray-500">
           {item.label}
          </span>
          <span className={`text-[11px] font-bold ${determineColor(item.valueColor)}`}>
            {item.value}
          </span>
        </div>
       ))}
     </div>
    </div>
  )
}


interface MetricsProps {
  notificationValue: number;
  refundValue: number;
  reroutingValue: number;
  disputeValue: number;
}

export const SlaPerformanceMetrics = ({
  notificationValue,
  refundValue,
  reroutingValue,
  disputeValue
}: MetricsProps) => {
  const performanceMetrics = [
    {
      slaType: "Notification",
      value: notificationValue,
      target: 95
    },
    {
      slaType: "Refund",
      value: refundValue,
      target: 90
    },
    {
      slaType: "Rerouting",
      value: reroutingValue,
      target: 90
    },
    {
      slaType: "Dispute Resolution",
      value: disputeValue,
      target: 85
    },
  ]
  return (
  
   <div className="flex gap-2">

    {performanceMetrics.map((value, index) => (
        <div
          key={index}
          className="list-none flex flex-1 flex-col gap-1.5 bg-gray-200 rounded-[8px] py-[8px] px-[6px]">
            <li className="text-[14px] font-medium text-[#4B5563]">
              {value.slaType} SLA
            </li>
          <li 
            className={`font-bold text-2xl
              ${
                value.value > value.target ?
                "text-green-600"
                : "text-amber-600"
              }
            `}
          >
            {value.value}%
          </li>

          <span className="text-[10px] text-[#6B7280]">Target: {value.target}%</span>
        </div>
      ))}
  </div>
  )
}
