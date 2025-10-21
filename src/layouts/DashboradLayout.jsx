// src/layouts/DashboardLayout.jsx
import { useState, useEffect } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Topbar from "../component/topbar/Topbar";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setIsSidebarOpen(!isSidebarOpen);
    else setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-700">Responsive Admin Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
