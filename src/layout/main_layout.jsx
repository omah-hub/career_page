import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../general/navbar/navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main style={{ marginTop: '1rem' }}>
                <Outlet />
            </main>
        </div>
    );
}
export default MainLayout