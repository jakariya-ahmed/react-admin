// src/components/DropdownMenu.jsx
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
      <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        Search Settings
      </button>
      <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        Recent Searches
      </button>
      <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        Clear History
      </button>
    </div>
  );
};

export default DropdownMenu;
