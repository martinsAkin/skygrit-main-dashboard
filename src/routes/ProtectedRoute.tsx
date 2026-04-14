import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

// interface ProtectedRouteProps {
//  children?: JSX.Element;
// }

export const ProtectedRoute = () => {
 const token = Cookies.get("token");

 if (!token) {
  return <Navigate to="/" replace />;
 }

 // return children;
 return <Outlet />
};
