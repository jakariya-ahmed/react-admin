// src/components/Topbar.jsx
import {
  Menu,
  Search,
  Globe,
  ShoppingCart,
  Bell,
  Maximize2,
  User,
  Settings,
} from "lucide-react";

export default function Topbar({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm">
      {/* Left: Collapse / Toggle Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
      </div>

      {/* Right: Action Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        <Search className="cursor-pointer hover:text-amber-500 hidden sm:block" />
        <Globe className="cursor-pointer hover:text-amber-500 hidden sm:block" />

        <div className="relative cursor-pointer">
          <ShoppingCart className="hover:text-amber-500" />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        <div className="relative cursor-pointer hidden sm:block">
          <Bell className="hover:text-amber-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </div>

        <Maximize2 className="cursor-pointer hover:text-amber-500 hidden sm:block" />
        <Settings className="cursor-pointer hover:text-amber-500 hidden sm:block" />
        <User className="cursor-pointer hover:text-amber-500 hidden sm:block" />
      </div>
    </header>
  );
}
