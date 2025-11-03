// src/components/LanguageDropdown.jsx
import React from "react";
import { Check } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

const LanguageDropdown = ({ currentLang, onSelect }) => {
  return (
    <div className="absolute right-0 mt-2 w-30 bg-white border border-gray-200 shadow-md z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition ${
            currentLang === lang.code ? "bg-gray-50 font-semibold" : ""
          }`}
        >
          <span className="text-lg mr-2">{lang.flag}</span>
          <span className="flex-grow text-gray-800">{lang.name}</span>
          {currentLang === lang.code && (
            <Check className="w-4 h-4 text-amber-600" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageDropdown;
