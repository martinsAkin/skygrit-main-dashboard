import apiClient from "./apiClient";
import type { InstantMesasage, NotificationTemplate, NotificationTemplatePayload } from "../interface";
import Cookies from "js-cookie";


export const createNotificationTemplate = async (payload: NotificationTemplatePayload) => {
 try {
   const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

   const response = await apiClient.post("/notification-template", 
    payload,
    {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    }
   }
   ); 
   return response.data;
   console.log("Template created successfully:", response.data);
   console.log("payload:", payload);
  } catch (error) {
   console.error("error:", error);
   throw error;
  }
}

export const createInstantMessage = async (payload: InstantMesasage) => {
 try {
   const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

   const response = await apiClient.post("/notification-template", 
    payload,
    {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    }
   }
   ); 
   return response.data;
   console.log("Template created successfully:", response.data);
   console.log("payload:", payload);
  } catch (error) {
   console.error("error:", error);
   throw error;
  }
}

export const fetchNotificationTemplates = async (): Promise<NotificationTemplate[]> => {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

  const res = await apiClient.get<{ response: NotificationTemplate[] }>("/notification-template/", {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  })

  return res.data.response ?? [];
}

// export const editTemplate = async (
//   id: number,
//   payload: NotificationTemplatePayload
// ): Promise<NotificationTemplate> => {
//   const token = Cookies.get("token");
//   const tokenType = Cookies.get("tokenType");

//   const res = await apiClient.put(`/notification-template/${id}`, payload, {
//     headers: {
//       Authorization: `${tokenType} ${token}`,
//       "Content-Type": "application/json",
//     },
//   });

//   return res.data;
// };


export const deleteNotificationTemplate = async (id: number): Promise<void> => {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

  await apiClient.delete(`/notification-template/${id}`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  });
};
