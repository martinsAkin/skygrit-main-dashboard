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
import ClientDashboard from "./pages/Client Management/ClientDashboard";
import EditClientDetails from "./pages/Client Management/components/EditClientDetails";
import InstantNotification from "./pages/Alerts and Notifications/Instant Notification/InstantNotification";
import { useState } from "react";
import InstantNotificationMessage from "./pages/Alerts and Notifications/Instant Notification/InstantNotifTemplate";
import ClientFormPage from "./pages/Client Management/components/ClientFormPage";
import ClientDetailsPage from "./pages/Client Management/components/ClientDetailsPage";

function App() {
 const location = useLocation();

 const [ isCollapsed, setIsCollapsed ] = useState(false);

 const hideSidebarRoutes = ["/"];
 const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

 const hideHeadbar = ["/"];
 const shouldHideHeadbar = !hideHeadbar.includes(location.pathname);

 return (
  <div className="flex bg-[#ffffff]">
   {shouldShowSidebar && (
    <Sidebar isCollapsed={isCollapsed} toggleSidebar={()=> setIsCollapsed(prev => !prev)}/>
   )}

   <main className="flex-1 px-2.5 py-1 flex flex-col gap-2">
    {shouldHideHeadbar && <Headbar />}

    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/policy-management" element={<PolicyPage />}/>
        <Route path="/requests/dashboard" element={<Request />}/>
        <Route path="/details/:id" element={<RequestReview />}/>
        
        <Route path="/user-management" element={<UserManagement />}/>
        <Route path="/role-management" element={<ManageRoles />}/>
        <Route path="/create-policy" element={<CreatePolicy />} />
        <Route path="/create-trigger" element={<CreateTrigger />} />
        <Route path="/create-template" element={<CreateTemplate />} />
        <Route path="/upgrade-setup" element={<UpgradeSetup />} />
        <Route path="/audit" element={<AuditTrail />}/>
        <Route path="/notifications" element={<AlertsAndNotifications />}/>
        <Route path="/instant-notification" element={<InstantNotification />} />
        <Route path="/instant-message" element={<InstantNotificationMessage />} />
        <Route path="/channelsetting/:id" element={<ChannelSettings />} />
        <Route path="/templates/:id" element={<TemplateDetails version="2.0" />} />
      </Route>

        <Route path="/client-management" element={<ClientDashboard />} />
        <Route path="/clients/:id" element={<ClientDetailsPage />} />
        <Route path="/clients/new" element={<ClientFormPage />} />
        <Route path="/clients/:id/edit" element={<ClientFormPage />} />
        <Route path="/edit-client/:id" element={<EditClientDetails />} />
        <Route path="/reports" element={<ReportsAnalytics />}/>
    </Routes>
   </main>
  </div>
 );
}

export default App;
