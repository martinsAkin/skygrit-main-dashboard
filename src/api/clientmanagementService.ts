import type { ClientDetail, ClientFormValues } from "../interface";


// export const clientsApi = {
//   getClient: async (id: string): Promise<ClientFormValues | null> => {
//     const res = await fetch(`/api/clients/${id}`);
//     if (res.status === 404) return null;
//     return res.json();
//   },

//   createClient: async (values: ClientFormValues): Promise<{ id: string }> => {
//     const res = await fetch("/api/clients", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     });
//     return res.json();
//   },

//   updateClient: async (id: string, values: ClientFormValues): Promise<{ id: string }> => {
//     const res = await fetch(`/api/clients/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     });
//     return res.json();
//   },
// };


interface StoredClient extends ClientFormValues {
  id: string;
  detail: ClientDetail;
}

// In-memory mock store, seeded with the client from the design.
const clients: StoredClient[] = [
  {
    id: "wkn-1",
    clientName: "Wakanow",
    internalAccount: "WKN12345",
    email: "michelle.rivera@example.com",
    salesType: "indirect-sales",
    businessUnit: "commercial",
    category: "corporate",
    faresPermissionType: "regular",
    detail: {
      id: "wkn-1",
      legalName: "Wakanow Nigeria Limited",
      displayId: "REQ-10001",
      internalAccount: "WKN12345",
      email: "michelle.rivera@example.com",
      status: "Active",
      businessChannelType: "Indirect Sales",
      faresAllowed: "Regular and Public Published",
      businessUnitAssignment: "Commercial Business (BU-COMM)",
      clientCategory: "Corporate Client",
      standardOfficeCode: "LOS-WKN-882",
    },
  },
];

const delay = <T,>(value: T, ms = 350): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

export const clientsApi = {
  getClient: async (id: string): Promise<ClientFormValues | null> => {
    const found = clients.find((c) => c.id === id);
    return delay(found ? { ...found } : null);
  },

  getClientDetail: async (id: string): Promise<ClientDetail | null> => {
    const found = clients.find((c) => c.id === id);
    return delay(found ? { ...found.detail } : null);
  },

  createClient: async (values: ClientFormValues): Promise<{ id: string }> => {
    const id = `client-${Date.now()}`;
    clients.push({
      id,
      ...values,
      detail: {
        id,
        legalName: values.clientName,
        displayId: `REQ-${Math.floor(Math.random() * 90000 + 10000)}`,
        internalAccount: values.internalAccount,
        email: values.email,
        status: "Active",
        businessChannelType: values.salesType,
        faresAllowed: values.faresPermissionType,
        businessUnitAssignment: values.businessUnit,
        clientCategory: values.category,
        standardOfficeCode: "—",
      },
    });
    return delay({ id }, 500);
  },

  updateClient: async (id: string, values: ClientFormValues): Promise<{ id: string }> => {
    const index = clients.findIndex((c) => c.id === id);
    if (index !== -1) {
      clients[index] = {
        ...clients[index],
        ...values,
        detail: {
          ...clients[index].detail,
          internalAccount: values.internalAccount,
          email: values.email,
        },
      };
    }
    return delay({ id }, 500);
  },
};

// export { emptyClientFormValues };