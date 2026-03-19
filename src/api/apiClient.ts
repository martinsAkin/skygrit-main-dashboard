import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
 baseURL: import.meta.env.VITE_API_BASE_URL, 

 headers: {
  "Content-Type": "application/json",
 },
});

apiClient.interceptors.request.use((config) => {
 const token = Cookies.get("token");
 const tokenType = Cookies.get("tokenType");
 if (token && tokenType) {
  config.headers.Authorization = `${tokenType} ${token}`; 
  // console.log("Auth header being sent:", config.headers.Authorization);
 }
 return config;
});

export default apiClient;
