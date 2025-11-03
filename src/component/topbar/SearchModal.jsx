// src/components/SearchModal.jsx
import React, { useState, useRef, useEffect } from "react";
import { Search, Mic, MoreVertical, X } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

const SearchModal = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef(null);
  const dropdownRef = useRef(null);

  // ✅ Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleDropdownOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleDropdownOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropdownOutside);
    };
  }, [isDropdownOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white w-full sm:w-[500px] rounded-xl shadow-xl p-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[2px] right-[2px] text-red-500 hover:text-amber-500"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-3 py-2">
          <Search className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search product, order, or customer..."
            className="flex-grow placeholder-gray-500 bg-transparent focus:outline-none text-gray-800"
            autoFocus
          />
          <Mic className="text-gray-500 cursor-pointer hover:text-amber-500 w-5 h-5 mx-2" />

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <MoreVertical
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-gray-500 cursor-pointer hover:text-amber-500 w-5 h-5"
            />
            {isDropdownOpen && <DropdownMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
