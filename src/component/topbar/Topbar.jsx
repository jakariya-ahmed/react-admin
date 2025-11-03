
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
import { useRef, useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import LanguageDropdown from "./LanguageDropdown ";
import CartDropdown from "./CartDropdown";

export default function Topbar({ toggleSidebar }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // languages states 
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
    // cart products state 
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "Wireless Headphones",
        price: 120,
        image: "/img/headphone.png",
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 90,
        image: "/img/watch.png",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 75,
        image: "/img/speaker.png",
      },
    ]);

    const dropdownRef = useRef(null);
    // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isLangOpen]);

  const handleSelectLang = (langCode) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
    // You can add i18n logic here later
  };

  // cart items 
   const cartRef = useRef(null);
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2">
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
        <Search 
        onClick={() => setIsSearchOpen(true)}
        className="w-6 h-6 p-1 text-gray-400 cursor-pointer rounded-full hover:bg-gray-200 hover:text-amber-500 transition hidden sm:block" />
        {/* Language Selector */}
      <div className="relative" ref={dropdownRef}>
        <Globe
          className="w-6 h-6 text-gray-500 cursor-pointer rounded-full hover:bg-gray-200 hover:text-amber-500 p-1 transition hidden sm:block"
          onClick={() => setIsLangOpen((prev) => !prev)}
        />
        {isLangOpen && (
          <LanguageDropdown
            currentLang={currentLang}
            onSelect={handleSelectLang}
          />
        )}
      </div>

        {/* Cart Icon */}
      <div className="relative cursor-pointer" ref={cartRef} onClick={() => setIsCartOpen((prev) => !prev)} >
        <ShoppingCart
          
          className="w-6 h-6 p-1 text-gray-400 cursor-pointer rounded-full hover:bg-gray-200 hover:text-amber-500 transition hidden sm:block"
        />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-violet-900 text-white text-xs rounded-full px-1 h-4 w-4 text-center">
            {cartItems.length}
          </span>
        )}

        {isCartOpen && (
          <CartDropdown items={cartItems} onRemove={handleRemove} />
        )}
      </div>

        <div className="relative cursor-pointer hidden sm:block">
          <Bell className="w-6 h-6 p-1 text-gray-400 cursor-pointer rounded-full hover:bg-gray-200 hover:text-amber-500 transition hidden sm:block"  />
          <span className="absolute text-center -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full px-1 w-4 h-4">
            5
          </span>
        </div>

        <Maximize2 className="text-gray-400 cursor-pointer hover:text-amber-500 hidden sm:block w-4" />
        <Settings className="text-gray-400 cursor-pointer hover:text-amber-500 hidden sm:block w-4" />
        <User className="text-gray-400 cursor-pointer hover:text-amber-500 hidden sm:block w-4" />
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
