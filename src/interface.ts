/* eslint-disable @typescript-eslint/no-explicit-any */
export interface VerifyClaimsProps {
 verifier: string;
 verifiComment?: string;
 verifiedOn: {
  dateVerified: string;
  timeVerified: string;
  dateApproved: string;
  timeApproved: string;
 };
 approver: string;
}

export interface RefundRowType {
 label: string;
 type: "select" | "number";
 key: string;
}

export interface RefundData {
  policyId: string; 
  routeType: string;
  cabinType: string;
  ticketClass: string;
  reason: string;
  baseFare: number;
  tax: number;
  fuelSurcharge: number;
  airportServiceFees: number;
  ancillary: number;
  penaltyValue: number;
  refundTimeLine: string;
  minHoursBeforeFlight: number;
  maxHoursBeforeFlight: number;
}

export interface RefundTableProps {
 ticketClasses: string[];
 reasons: CancellationReason[];
 refundDataMap: Record<string, any>;
 refundRows: RefundRowType[];
 refundTimelineOptions: string[];
 onChange: () => void;
}

export interface RefundRowProps {
 reason: string;
 row: RefundRowType;
 idx: number;
 ticketClasses: string[];
 refundDataMap: Record<string, any>;
 refundTimelineOptions: string[];
 onChange: () => void;
}

export interface RefundCellProps {
 reason: string;
 tc: string;
 row: RefundRowType;
 refundDataMap: Record<string, any>;
 refundTimelineOptions: string[];
 onChange: () => void;
}
export interface ActionBtnProps {
 changed: boolean;
 onSave: () => void;
 onCancel: () => void;
}

export interface ModulesBtnSetProps {
 text1?: string;
 text2?: string;
 onCancel: () => void;
}
export interface ModulesProps {
 onCancel: () => void;
 onSuccess: () => void;
}

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  username: string;
  active: boolean;
  authorities: string[];
  fullName: string;
  role: string;
  firstLogin: boolean;
}

export interface AdminResponse {
  response: any;
  content: User[];
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  empty: boolean;
}

export interface MenuUserMgtProps {
 onEdit: () => void;
 onDeactivate: () => void;
 onDelete: () => void;
 onClose: () => void;
}

export interface RoleAuthority {
 authority: string;
 authorityFriendlyName: string;
 module: string;
}

export interface NewRole {
 roleName: string;
 authorities: RoleAuthority[];
}

export type FlightType = "Domestic" | "International" | "Regional";

export interface FlightButtonsProps {
 selectedFlightType: FlightType | null;
 onSelect: (type: FlightType) => void;
}

export interface Policy {
 id: number;
 createdAt: string;
 updatedAt: string;
 policyId: string;
 cabinType: string;
 name: string;
 description: string;
 status: string;
}
export interface NewPolicy {
 cabinType: string;
 name: string;
 description: string;
 status: string;
}

export interface PolicyListProps {
//  policies: Policy[];
 selectedFlightType: FlightType | null;
 selectedPolicy: Policy | null;
 onSelectPolicy: (policy: Policy) => void;
}

export interface PolicyDetailsProps {
 selectedPolicy: Policy | null;
 selectedFlightType: FlightType | null;
}

export interface Header {
 name: string;
}
export interface PolicyRefundMetric {
 policyId: string;
 cancellationType: string;
 cabinType: string;
 routeType: string;
 ticketClass: string;
 refundTicketType: string;
 tripType: string[];
 passengerType: string[];
 ticketType: string[];
 waiver: boolean;
 ticketSales: string[];
}

export type SubCategory = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  value: string;
  subCategories: SubCategory[];
};

export const Categories: Category[] = [
 {
  id: 1,
  name: "Ticket sales(booking source)",
  value: "ticketSales",
  subCategories: [
    { id: 110, name: "Direct sale from Airline" },
    { id: 111, name: "Indirect sales (OTAs, agencies)" },
  ]
 },
 {
  id: 2,
  name: "Refund Ticket Type",
  value: "refundTicketType",
  subCategories: [
    { id: 121, name: "Refundable" },
    { id: 122, name: "Non-Refundable" },
  ]
 },
 {
  id: 3,
  name: "Trip",
  value: "tripType",
  subCategories: [
    { id: 131, name: "One-Way" },
    { id: 132, name: "Round-Trip" },
    { id: 133, name: "Multi-City" },

  ]
 },
 {
  id: 4,
  name: "Passenger Type",
  value: "passengerType",
  subCategories: [
    { id: 141, name: "Adult" },
    { id: 142, name: "Children" },
    { id: 143, name: "Infant" },

  ]
 },
 {
  id: 5,
  name: "Waiver",
  value: "waiver",
  subCategories: [
    { id: 150, name: "Waiver" },
  ]
 },
 {
  id: 6,
  name: "Ticket Type",
  value: "ticketType",
  subCategories: [
    { id: 151, name: "Group" },
    { id: 152, name: "Individual" },
  ]
 },
];

export interface EditableRefundMetric {
  policyId: string;           
  ticketClass: string;        
  routeType: string;          
  cabinType: string;          
  cancellationType: string;   
  refundTicketType: string;   
  tripType: string[];         
  passengerType: string[];    
  ticketType: string[];       
  ticketSales: string[];      
  waiver: boolean;            
}

export interface Refund {
 [key: string]: string;
}

export interface CancellationReason {
  id: number;
  createdAt: string;
  updatedAt: string;
  reason: string;
  activated: boolean;
}

export type ChannelOption = "EMAIL" | "WHATSAPP" | "SMS";
export type TemplateStatus = "DRAFT" | "PUBLISHED" | "DEACTIVATED";
export interface NotificationTemplatePayload {
  name: string;
  category: string;
  channel: ChannelOption[];
  subject: string;
  content: string;
  status: TemplateStatus;
}

export interface NotificationTemplate extends NotificationTemplatePayload {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface FormState {
  name: string;
  category: string;
  email: boolean;
  sms: boolean;
  whatsapp: boolean;
  subject: string;
  message: string;
  status: "DRAFT" | "PUBLISHED" | "DEACTIVATED" | "";
}

export type ReportCategory =
  | "Overview"
  | "Cancellations"
  | "Refund"
  | "Rerouting"
  | "Settlements"
  | "Disputes"
  | "Communication"
  | "Compliance"
;

export const categories: ReportCategory[] = [
  "Overview",
  "Cancellations",
  "Refund",
  "Rerouting",
  "Settlements",
  "Disputes",
  "Communication",
  "Compliance",
];