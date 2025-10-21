



// layouts/DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} />
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}






























