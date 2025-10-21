import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboradLayout";
import Dashboard from "../pages/Dashboard";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* admin routes  */}
                <Route path="/admin" element={<DashboardLayout /> } />
                <Route index element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}