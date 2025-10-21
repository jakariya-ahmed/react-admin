// components/Sidebar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ShoppingBag, Users, ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar({ isCollapsed }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <motion.aside
      animate={{ width: isCollapsed ? "80px" : "260px" }}
      className="h-screen bg-amber-500 text-white shadow-lg flex flex-col transition-all duration-300"
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-4 border-b border-amber-400">
        <h1 className={`${isCollapsed ? "hidden" : "block"} text-xl font-bold`}>ShopAdmin</h1>
        <LayoutDashboard className={`${isCollapsed ? "block" : "hidden"} w-6 h-6`} />
      </div>

      {/* Menu */}
      <nav className="mt-4 px-3 space-y-1 overflow-y-auto">
        {/* Dashboard */}
        <button
          className="flex items-center w-full p-2 rounded-md hover:bg-amber-400"
          onClick={() => toggleMenu("dashboard")}
        >
          <LayoutDashboard className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3 text-sm">Dashboard</span>}
        </button>

        {/* Products */}
        <div>
          <button
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-amber-400"
            onClick={() => toggleMenu("products")}
          >
            <div className="flex items-center">
              <ShoppingBag className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3 text-sm">Products</span>}
            </div>
            {!isCollapsed && (openMenu === "products" ? <ChevronDown /> : <ChevronRight />)}
          </button>

          {/* Child */}
          {openMenu === "products" && !isCollapsed && (
            <div className="ml-8 mt-1 space-y-1 text-sm">
              <button className="hover:text-amber-100">All Products</button>
              <button className="hover:text-amber-100">Add Product</button>
              <button className="hover:text-amber-100">Categories</button>

              {/* Grandchild example */}
              <div className="ml-4">
                <p className="font-semibold mt-2">Sub Categories</p>
                <button className="ml-2 hover:text-amber-100">Men</button>
                <button className="ml-2 hover:text-amber-100">Women</button>
                <button className="ml-2 hover:text-amber-100">Kids</button>
              </div>
            </div>
          )}
        </div>

        {/* Users */}
        <button className="flex items-center w-full p-2 rounded-md hover:bg-amber-400">
          <Users className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3 text-sm">Users</span>}
        </button>
      </nav>
    </motion.aside>
  );
}
