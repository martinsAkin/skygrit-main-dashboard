import { NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import homeIcon from "/assets/Icons/house-simple.svg";
import requestIcon from "/assets/Icons/arrows-left-right.svg";
import policyIcon from "/assets/Icons/material-symbols_text-compare-outline.svg";
import alertIcon from "/assets/Icons/si_notifications-line.svg";
import reportIcon from "/assets/Icons/presentation-chart.svg";
import userIcon from "/assets/Icons/user-gear.svg";
import auditIcon from "/assets/Icons/watch.svg";
import helpIcon from "/assets/Icons/link.svg";
import userManualIcon from "/assets/Icons/ix_user-manual.svg";
import settingsIcon from "/assets/Icons/gear-six.svg";
import logOutIcon from "/assets/Icons/sign-out.svg";
import skyGrit from "/assets/SkygritLogoWhite.svg";
import user from "/assets/Icons/client.svg"


interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}
const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
 interface sidebarType {
  icon: string;
  title: string;
  to: string;
 }

 const sideBar: sidebarType[] = [
  { icon: homeIcon, title: "Dashboard", to: "/dashboard" },
  { icon: requestIcon, title: "Request", to: "/requests/dashboard" },
  { icon: policyIcon, title: "Policy Management", to: "/policy-management" },
  { icon: alertIcon, title: "Alert & Notifications", to: "/notifications" },
  { icon: reportIcon, title: "Reports & Analytics", to: "/reports" },
  { icon: user, title: "Client Management", to: "/client-management"},
  { icon: userIcon, title: "User Management", to: "/user-management" },
  { icon: auditIcon, title: "Audit Trail", to: "/audit" },
  { icon: helpIcon, title: "Help & Support", to: "/support" },
  { icon: userManualIcon, title: "User Manual", to: "/manual" },
  { icon: settingsIcon, title: "Settings", to: "/settings" },
 ];

//  const [toggle, setToggle] = useState(false);
 const location = useLocation();
 const navigate = useNavigate();

 // Function to check if a route is active
 const isActive = (path: string) => {
  return location.pathname === path || location.pathname.startsWith(path + "/");
 };

 return (
  <div className={`${isCollapsed ? "w-20" : "w-64"} transition-all duration-300`}>
    <div className="bg-[#030E20] h-screen flex flex-col gap-[16px]">
     {/* Side bar Head*/}
     <section className="flex justify-between items-center px-4 py-[10px]">

      {!isCollapsed && (
          <img
            className="w-[114px] h-[39px]"
            src="/assets/Icons/image 1.svg"
            alt="arik"
          />
        )}
        <button onClick={toggleSidebar}>
          <img src="/assets/Icons/sidebar-left.svg" alt="icon" />
        </button>
     </section>

     {/* Menu Items */}
     <section className="px-[24px]">
      {sideBar.map((item) => (
       <NavLink
        to={item.to}
        key={item.title}
        className={`flex items-center gap-3 px-3 py-2 mb-2 cursor-pointer rounded-lg
                    ${
                     isActive(item.to)
                      ? "bg-[#0D47A1] text-white font-bold hover:bg-blue-700"
                      : ""
                    }`}
       >
          <img className="w-[24px]" src={item.icon} alt="icon" />
          
          {!isCollapsed && (
            <p
              className={`text-[16px] ${
              isActive(item.to) ? "text-white" : "text-[#888991]"
            }`}
            >
          {item.title}
          </p>
          )}
       </NavLink>
      ))}
     </section>

     <section className="mt-[165px] px-[24px]">
      <div className="p-2 flex flex-row gap-3 items-center">
       <div className="flex justify-center items-center p-3 w-[34px] h-[34px] rounded-full bg-[#0D47A1] text-white text-2xl font-bold">
        AA
       </div>
       <span>
        <h2 className="text-[12px] font-medium text-white">Arik Air</h2>
        <p className="text-[11px] text-[#93C5FD]">Admin Account</p>
       </span>
      </div>
      <NavLink
       to="/"
       className="p-2 flex flex-row gap-3 items-center mt-3 cursor-pointer"
       onClick={() => {
        Cookies.remove("token");
        navigate("/");
       }}
      >
       <img className="w-[24px]" src={logOutIcon} alt="" />
       <span>
        <p className="text-[16px] text-[#888991]">Logout</p>
       </span>
      </NavLink>
      <div className="p-2 flex flex-row items-center gap-1 mt-3">
       <p className="text-[12px] font-bold text-[#888991]">Powered By</p>
       <img className="w-[85px]" src={skyGrit} alt="" />
      </div>
     </section>
    </div>
  </div>
 );
};

export default Sidebar;
