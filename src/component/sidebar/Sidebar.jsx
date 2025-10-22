import { aside } from "framer-motion/client";
import { motion } from "framer-motion";
import { LayoutDashboard, X } from "lucide-react";
import Menu from "./Menu";
export default function Sidebar({
    isCollapsed,
    isMobile,
    isSidebarOpen,
    toggleSidebar,
}) {
    const sidebarVariants = {
    open: { x: 0 },
    closed: { x: isMobile ? "-100%" : 0 },
  };

    return (
        // <div className="flex items-center justify-between p-4 border-b border-gray-700">
        //   {!isCollapsed && <h1 className="text-xl font-bold">ShopAdmin</h1>}
        //   {isMobile ? (
        //     <button onClick={toggleSidebar}>
        //       <X className="w-6 h-6 text-white" />
        //     </button>
        //   ) : (
        //     <LayoutDashboard className="w-6 h-6" />
        //   )}
        // </div>
        <motion.aside
            variants={sidebarVariants}
             animate={isSidebarOpen || !isMobile ? "open" : "closed"}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed md:static z-40 h-full bg-[#111C43] text-white flex flex-col
            ${isCollapsed && !isMobile ? "w-[80px]" : "w-[260px]"}
            `}
        >
         {/* Logo / Close Button */}
            <div className="flex items-center justify-between p-4 b">
                {!isCollapsed && <h1>ShopAdmin</h1>}
                {isMobile ? (
                    <button onClick={toggleSidebar}> <X className="w-6 h-6 text-amber-600"/> </button>
                ) : (
                     <LayoutDashboard className="w-6 h-6" />
                )}

                
               
            </div>

          <Menu isCollapsed={isCollapsed}/>
          
        </motion.aside>
    );
}