import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import PolicyPage from "./pages/Policy Management/PolicyPage";
import CreatePolicy from "./pages/Policy Management/components/CreatePolicy";
import Login from "./pages/Login";
import Request from "./pages/Request/Request";
import RequestReview from "./pages/Request/components/RequestReview";
import UserManagement from "./pages/User Management/UserManagement";
import AuditTrail from "./pages/Audit Trail/AuditTrail";
import ManageRoles from "./pages/User Management/components/ManageRoles";
import Headbar from "./components/Headbar";
import UpgradeSetup from "./pages/Policy Management/components/UpgradeSetup";
import AlertsAndNotifications from "./pages/Alerts and Notifications/AlertsAndNotifications";
import CreateTemplate from "./pages/Alerts and Notifications/components/CreateTemplate";
import TemplateDetails from "./pages/Alerts and Notifications/components/TemplateDetails";
import CreateTrigger from "./pages/Alerts and Notifications/components/CreateTrigger";
import ChannelSettings from "./pages/Alerts and Notifications/components/ChannelSettings";
import { ReportsAnalytics } from "./pages/Reports and Analytics/ReportsAnalytics";

function App() {
 const location = useLocation();
 const hideSidebarRoutes = ["/"];
 const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

 const hideHeadbar = ["/"];
 const shouldHideHeadbar = !hideHeadbar.includes(location.pathname);

 return (
  <div className="flex bg-[#ffffff]">
   {shouldShowSidebar && <Sidebar />}

   <main className="flex-1 px-2.5 py-1 flex flex-col gap-2">
    {shouldHideHeadbar && <Headbar />}

    <Routes>
     <Route
      path="/dashboard"
      element={
       <ProtectedRoute>
        <Dashboard />
       </ProtectedRoute>
      }
     />

     <Route
      path="/policy-management"
      element={
      //  <ProtectedRoute>
        <PolicyPage />
      //  </ProtectedRoute>
      }
     />

     <Route
      path="/requests/dashboard"
      element={
       <ProtectedRoute>
        <Request />
       </ProtectedRoute>
      }
     />

     <Route
      path="/details/:id"
      element={
       <ProtectedRoute>
        <RequestReview />
       </ProtectedRoute>
      }
     />

     <Route path="/reports" element={
      // <ProtectedRoute>
        <ReportsAnalytics />
      // </ProtectedRoute>
     } 
      />

     <Route
      path="/user-management"
      element={
       <ProtectedRoute>
        <UserManagement />
       </ProtectedRoute>
      }
     />

     <Route
      path="/role-management"
      element={
       <ProtectedRoute>
        <ManageRoles />
       </ProtectedRoute>
      }
     />

     <Route path="/create-policy" element={<CreatePolicy />} />
     <Route path="/create-trigger" element={<CreateTrigger />} />
     <Route path="/create-template" element={<CreateTemplate />} />
     <Route path="/upgrade-setup" element={<UpgradeSetup />} />

     <Route
      path="/audit"
      element={
       <ProtectedRoute>
        <AuditTrail />
       </ProtectedRoute>
      }
     />

     <Route path="/" element={<Login />} />
     <Route path="/notifications" element={
      <ProtectedRoute>
        <AlertsAndNotifications />
      </ProtectedRoute>
     } 
      />
     <Route path="/channelsetting/:id" element={<ChannelSettings />} />

     <Route path="/templates/:id" element={<TemplateDetails version="2.0" />} />
    </Routes>
   </main>
  </div>
 );
}

export default App;
