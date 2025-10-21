import { motion } from "framer-motion";

export default function Sidebar(
    {isCollapsed, isMobile, isSidebarOpen, toggleSidebar }
) {
    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: isMobile ? '-100%' : 0 }
    }
    
    return (
        <>
            {/* Backdrop for mobile  */}
            {isMobile && isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-30" onClick={toggleSidebar}>

                </div>
            )}

        <motion.aside
            variants={sidebarVariants}
            animate={isSidebarOpen || !isMobile ? 'open' : 'closed'}
            className={`fixed md:static z-40 h-full bg-sky-950 text-white shadow-lg flex flex-col
            ${isCollapsed && !isMobile ? "w-[80px]" : "w-[260px]"}
            `}
        >

        </motion.aside>



        </>
    );
}