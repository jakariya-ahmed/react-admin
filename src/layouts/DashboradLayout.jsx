import { useEffect, useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Topbar from "../component/topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout({ children }) {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setIsSidebarOpen(!isSidebarOpen)
    else setIsCollapsed(!isCollapsed); 
  }



  return(
    <div className="flex h-screen overflow-hidden">
        {/* Admin Sidebar  */}
        <Sidebar 
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        
        /> 

        <div className="flex-1 flex flex-col">
            {/* Admin Topbar  */}
            <Topbar />

            {/* Main Content  */}
            <main>
              <Outlet />
            </main>
            {/* Main Content  */}

        </div>
    </div>
  );
}