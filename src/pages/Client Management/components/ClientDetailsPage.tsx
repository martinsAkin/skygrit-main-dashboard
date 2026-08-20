import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { clientsApi } from "../../../api/clientmanagementService";
import type { client_data } from "../../../interface";
import { InfoBadge } from "../../../components/molecules/InfoBadge";
import { DetailField } from "../../../components/molecules/InfoBadge";
import axios from "axios";

export default function ClientDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

//   const [client, setClient] = useState<ClientDetail | null>(null);
  const [dummyData, setDummyData] = useState<client_data[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get("/data/ClientData.json").then((response) => setDummyData(response.data)).catch((error) => console.error(error))
   }, []);

   const clientdetails = dummyData?.find((clientdetail) => clientdetail.id === Number(id));

//   useEffect(() => {
//     if (!id) return;
//     let cancelled = false;

//     clientsApi.getClientDetail(id).then((res) => {
//       if (cancelled) return;
//       if (!res) {
//         setNotFound(true);
//       } else {
//         setClient(res);
//       }
//       setLoading(false);
//     });

//     return () => {
//       cancelled = true;
//     };
//   }, [id]);

  function goBackToList() {
    navigate("/client-management");
  }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center gap-3 px-6 py-24 text-slate-400">
//         <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
//         <p className="text-sm font-medium">Loading client...</p>
//       </div>
//     );
//   }

//   if (notFound || !client) {
//     return (
//       <div className="px-6 py-24 text-center sm:px-10">
//         <p className="text-lg font-semibold text-slate-900">Client not found</p>
//         <p className="mt-2 text-sm text-slate-500">
//           This client may have been removed or the link is out of date.
//         </p>
//         <button
//           type="button"
//           onClick={goBackToList}
//           className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800"
//         >
//           &larr; Back to Client Management
//         </button>
//       </div>
//     );
//   }

  return (
    <div className="px-6 py-8 sm:px-10">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Client Details: {clientdetails?.details.legalName.split(" ")[0]}
            </h1>
            <InfoBadge label={clientdetails?.status || "Invalid"} tone={clientdetails?.status === "Active" ? "green" : "slate"} />
          </div>
          <p className="mt-1.5 text-sm text-slate-500">
            Verify configuration status, business channels, and automatic resolution policies
          </p>
        </div>

        <button
          type="button"
          onClick={goBackToList}
          className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">General Account Information</h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate(`/clients/${clientdetails?.id}/edit`)}
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Edit Client Profile
            </button>
            <button
              type="button"
              onClick={() => navigate(`/clients/${clientdetails?.id}/configuration`)}
              className="flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
            >
              Client Configuration
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-slate-100 pt-6 sm:grid-cols-3">
          <DetailField label="Client Name">{clientdetails?.details.legalName}</DetailField>
          <DetailField label="Client ID">
            <button
              type="button"
              onClick={() => navigate(`/details/${clientdetails?.clientId}`)}
              className="font-semibold text-blue-700 hover:underline"
            >
              REQ-{clientdetails?.clientId}
            </button>
          </DetailField>
          <DetailField label="Internal Account Code">{clientdetails?.internalAcc}</DetailField>

          <DetailField label="Primary Contact Email">{clientdetails?.email}</DetailField>
          <DetailField label="Business Channel Type">
            <InfoBadge label={clientdetails?.details.businessChannelType || ""} />
          </DetailField>
          <DetailField label="Fares Allowed">{clientdetails?.details.faresAllowed}</DetailField>
        </div>

        <h2 className="mt-8 text-lg font-bold text-slate-900">Organizational Properties</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-slate-100 pt-6 sm:grid-cols-3">
          <DetailField label="Business Unit Assignment">{clientdetails?.details.businessUnitAssignment}</DetailField>
          <DetailField label="Client Category">
            <InfoBadge label={clientdetails?.details.clientCategory || ""} />
          </DetailField>
          <DetailField label="Standard Office Code">{clientdetails?.details.standardOfficeCode}</DetailField>
        </div>
      </div>
    </div>
  );
}