import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  File,
} from "lucide-react";

const Menu = ({ isCollapsed }) => {
  const [openParent, setOpenParent] = useState(null);
  const [openChild, setOpenChild] = useState(null);

  // handle parent open/close
  const toggleParent = (parent) => {
    setOpenParent(openParent === parent ? null : parent);
    setOpenChild(null); // reset grandchild when closing parent
  };

  // handle child open/close
  const toggleChild = (child) => {
    setOpenChild(openChild === child ? null : child);
  };

  return (
    <nav className="mt-4 px-3 space-y-1">
      {/* ======= Parent 1 ======= */}
      <button
        onClick={() => toggleParent("dashboard")}
        className={`flex items-center justify-between w-full p-2 rounded-md hover:bg-indigo-900 ${
          openParent === "dashboard" ? "bg-indigo-900 text-white" : ""
        }`}
      >
        <div className="flex items-center">
          <LayoutDashboard className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3 text-sm">Dashboard</span>}
        </div>
        {!isCollapsed &&
          (openParent === "dashboard" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          ))}
      </button>

      {/* ======= Child Links (Dashboard) ======= */}
      {openParent === "dashboard" && !isCollapsed && (
        <div className="ml-6 space-y-1">
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-indigo-900 ${
                isActive ? "text-gray-600" : ""
              }`
            }
          >
            <span className="text-sm">Overview</span>
          </NavLink>

          {/* Child with Grandchild */}
          <button
            onClick={() => toggleChild("analytics")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-indigo-900"
          >
            <span className="text-sm">Analytics</span>
            {openChild === "analytics" ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {/* Grandchild links */}
          {openChild === "analytics" && (
            <div className="ml-5 space-y-1">
              <NavLink
                to="/dashboard/analytics/sales"
                className={({ isActive }) =>
                  `block text-sm p-2 rounded-md hover:bg-indigo-800 ${
                    isActive ? "bg-indigo-800 text-white" : ""
                  }`
                }
              >
                Sales
              </NavLink>
              <NavLink
                to="/dashboard/analytics/customers"
                className={({ isActive }) =>
                  `block text-sm p-2 rounded-md hover:bg-indigo-800 ${
                    isActive ? "bg-indigo-800 text-white" : ""
                  }`
                }
              >
                Customers
              </NavLink>
            </div>
          )}
        </div>
      )}

      {/* ======= Parent 2 ======= */}
      <button
        onClick={() => toggleParent("products")}
        className={`flex items-center justify-between w-full p-2 rounded-md hover:bg-indigo-900 ${
          openParent === "products" ? "bg-indigo-900 text-white" : ""
        }`}
      >
        <div className="flex items-center">
          <ShoppingBag className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3 text-sm">Products</span>}
        </div>
        {!isCollapsed &&
          (openParent === "products" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          ))}
      </button>

      {openParent === "products" && !isCollapsed && (
        <div className="ml-6 space-y-1">
          <NavLink
            to="/products/list"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-indigo-900 ${
                isActive ? "bg-indigo-900 text-white" : ""
              }`
            }
          >
            <span className="text-sm">Product List</span>
          </NavLink>
          <NavLink
            to="/products/add"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-indigo-900 ${
                isActive ? "bg-indigo-900 text-white" : ""
              }`
            }
          >
            <span className="text-sm">Add Product</span>
          </NavLink>
        </div>
      )}

      {/* ======= Parent 3 ======= */}
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `flex items-center w-full p-2 rounded-md hover:bg-indigo-800 ${
            isActive ? "bg-indigo-800 text-white" : ""
          }`
        }
      >
        <Users className="w-5 h-5" />
        {!isCollapsed && <span className="ml-3 text-sm">Users</span>}
      </NavLink>

      {/* ======= Parent 4 ======= */}
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center w-full p-2 rounded-md hover:bg-indigo-800 ${
            isActive ? "bg-indigo-800 text-white" : ""
          }`
        }
      >
        <Settings className="w-5 h-5" />
        {!isCollapsed && <span className="ml-3 text-sm">Settings</span>}
      </NavLink>

      
      {/* ======= Parent 6 ======= */}
      <button
        onClick={() => toggleParent("pages")}
        className={`flex items-center justify-between w-full p-2 rounded-md hover:bg-indigo-900 ${
          openParent === "pages" ? "bg-indigo-900 text-white" : ""
        }`}
      >
        <div className="flex items-center">

          <File className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3 text-sm">Pages</span>}
        </div>
        {!isCollapsed &&
          (openParent === "pages" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          ))}
      </button>

      {openParent === "pages" && !isCollapsed && (
        <div className="ml-6 space-y-1">
          <NavLink
            to="/pages/list"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-indigo-900 ${
                isActive ? "bg-indigo-900 text-white" : ""
              }`
            }
          >
            <span className="text-sm">Product List</span>
          </NavLink>
          <NavLink
            to="/pages/add"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md hover:bg-indigo-900 ${
                isActive ? "bg-indigo-900 text-white" : ""
              }`
            }
          >
            <span className="text-sm">Add Pages</span>
          </NavLink>
        </div>
      )}

    </nav>
  );
};

export default Menu;
