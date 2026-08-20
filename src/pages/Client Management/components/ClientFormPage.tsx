import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import ClientForm from "../components/ClientForm";
// import { clientsApi } from "../../../api/clientmanagementService";
import type { client_data, ClientFormValues } from "../../../interface";
import axios from "axios";

export default function ClientFormPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [initialValues, setInitialValues] = useState<ClientFormValues | null>(null);
  const [loading, setLoading] = useState(isEdit);
  const [notFound, setNotFound] = useState(false);
  const [dummyData, setDummyData] = useState<client_data[] | null>(null);

  useEffect(() => {
    axios
      .get("/data/ClientData.json")
      .then((response) => {
        setDummyData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Find client based on URL ID
  useEffect(() => {
    // Create mode
    if (!id) {
      setLoading(false);
      return;
    }

    // Wait until JSON has loaded
    if (!dummyData) return;

    const client = dummyData.find(
      (clientdetail) => clientdetail.id === Number(id)
    );

    if (!client) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    // Convert mock data into the form's expected structure
    setInitialValues({
      clientId: client.clientId,
      clientName: client.clientName,
      internalAcc: client.internalAcc,
      email: client.email,
      type: client.type,
      businessUnit: client.businessUnit,
      category: client.category,
      faresPermissionType: client.fares,
    });

    setLoading(false);
  }, [id, dummyData]);


//   useEffect(() => {
//     if (!id) return;
//     let cancelled = false;

//     clientsApi.getClient(id).then((client) => {
//       if (cancelled) return;
//       if (!client) {
//         setNotFound(true);
//       } else {
//         setInitialValues(client);
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

  async function handleSubmit(values: ClientFormValues) {
    if (isEdit && id) {
    //   await clientsApi.updateClient(id, values);
    console.log(values)
    } else {
    //   await clientsApi.createClient(values);
    console.log(values)
    }
    goBackToList();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 px-6 py-24 text-slate-400">
        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        <p className="text-sm font-medium">Loading client...</p>
      </div>
    );
  }

  if (isEdit && notFound) {
    return (
      <div className="px-6 py-24 text-center sm:px-10">
        <p className="text-lg font-semibold text-slate-900">Client not found</p>
        <p className="mt-2 text-sm text-slate-500">
          This client may have been removed or the link is out of date.
        </p>
        <button
          type="button"
          onClick={goBackToList}
          className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          &larr; Back to Client Management
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 sm:px-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {isEdit ? "Edit Client" : "Create New Client"}
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            {isEdit
              ? "Update client profile, business category, and fares classification"
              : "Add a new client to the system"}
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

      <div className="mt-6">
        <ClientForm
          mode={isEdit ? "edit" : "create"}
          initialValues={initialValues ?? undefined}
          onSubmit={handleSubmit}
          onCancel={goBackToList}
        />
      </div>
    </div>
  );
}