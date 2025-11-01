import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboradLayout";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../component/product/AddProduct";
import ProductsList from "../component/product/ProductsList";
export default function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/admin" element={<DashboardLayout /> }>
                    <Route index element={<Dashboard />} />
                    {/* Products  */}
                    <Route path="add-product" element={<AddProduct /> } />
                    <Route path="admin/products" element={<ProductsList /> } />

                </Route>
            </Routes>


        </BrowserRouter>
    );
}