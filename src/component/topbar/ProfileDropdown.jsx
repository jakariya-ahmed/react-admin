import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  CheckSquare,
  Headphones,
  LogOut,
  ChevronDown,
} from "lucide-react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🔒 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🧭 Menu items
  const menuItems = [
    { id: 1, name: "Profile", icon: <User className="w-4 h-4" /> },
    { id: 2, name: "Inbox", icon: <Mail className="w-4 h-4" /> },
    { id: 3, name: "Task Manager", icon: <CheckSquare className="w-4 h-4" /> },
    { id: 4, name: "Support", icon: <Headphones className="w-4 h-4" /> },
    { id: 5, name: "Logout", icon: <LogOut className="w-4 h-4 text-red-500" />, danger: true },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 👤 Profile Section */}
      <div
        className="flex items-center gap-x-2 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/img/avatar.jpeg"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-gray-200"
        />
        <div className="leading-tight hidden sm:block">
          <p className="text-sm -mb-1 font-semibold text-indigo-900">
            John Smith
          </p>
          <span className="text-xs text-gray-600">Frontend Developer</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* 🧾 Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2 z-50">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.name === "Logout") {
                  alert("Logged out successfully!");
                }
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition cursor-pointer ${
                item.danger ? "text-red-600" : "text-gray-700"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
