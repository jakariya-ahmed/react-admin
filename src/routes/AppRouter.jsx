import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboradLayout";
import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Admin Routes  */}
                <Route path="/admin" element={<DashboardLayout /> }>
                    <Route index element={<Dashboard /> }/>

                </Route>

                {/* Redirect all unknown routes to 404 pages */}
                <Route path="*" element={<Navigate to="/admin" replace/> } />
            </Routes>
        </BrowserRouter>
    );
}