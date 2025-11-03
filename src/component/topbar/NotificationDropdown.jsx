import React, { useState, useEffect, useRef } from "react";
import { Bell, X } from "lucide-react";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your order has been shipped", time: "2h ago" },
    { id: 2, text: "New message from support", time: "5h ago" },
    { id: 3, text: "Weekly report is ready", time: "1d ago" },
    { id: 4, text: "Password changed successfully", time: "2d ago" },
  ]);

  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Remove a single notification (dropdown stays open)
  const handleRemove = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 🔔 Bell Icon */}
      <div
        className="relative cursor-pointer hidden sm:block"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-6 h-6 p-1 text-gray-400 rounded-full hover:bg-gray-200 hover:text-amber-500 transition" />
        {notifications.length > 0 && (
          <span className="absolute text-center -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full px-1 w-4 h-4">
            {notifications.length}
          </span>
        )}
      </div>

      {/* 🧾 Dropdown Card */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg p-3 z-50">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <h3 className="text-sm font-semibold text-gray-800">
              Notifications
            </h3>
            <span className="text-xs text-gray-500">
              {notifications.length} items
            </span>
          </div>

          {/* List */}
          <div className="max-h-90 overflow-y-auto space-y-2">
            {notifications.length === 0 ? (
              <p className="text-sm text-center text-gray-400">
                No notifications
              </p>
            ) : (
              notifications.map((note) => (
                <div
                  key={note.id}
                  className="flex items-start justify-between bg-gray-50 hover:bg-gray-100 rounded-lg p-2 transition"
                >
                  <div>
                    <p className="text-sm text-gray-700">{note.text}</p>
                    <span className="text-xs text-gray-400">{note.time}</span>
                  </div>
                  <button
                    onClick={() => handleRemove(note.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
