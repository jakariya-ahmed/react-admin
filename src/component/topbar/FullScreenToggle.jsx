// src/components/FullScreenToggle.jsx
import React, { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

const FullScreenToggle = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <button
      onClick={toggleFullScreen}
      title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
    >
      {isFullScreen ? (
        <Minimize2 className="text-gray-400 hover:text-amber-500 w-4 h-4" />
      ) : (
        <Maximize2 className="text-gray-400 hover:text-amber-500 w-4 h-4" />
      )}
    </button>
  );
};

export default FullScreenToggle;
