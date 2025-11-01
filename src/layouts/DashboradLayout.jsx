import { useState, useEffect } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Topbar from "../component/topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setIsSidebarOpen(!isSidebarOpen);
    else setIsCollapsed(!isCollapsed);
  };

  return (

    <div className="flex h-screen  overflow-hidden">
      <Sidebar 
        isCollapsed={isCollapsed}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-1">
        <Topbar toggleSidebar={toggleSidebar}/>
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet /> 
        </main>
      </div>
    </div>

  );
}
