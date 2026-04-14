import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";

export function RootLayout() {
    return (
        <div style={{ minHeight: "100vh" }}>
            {/* Header and Navigation for all pages */}
            <Header />
            {/* Main content area where child routes will be rendered */}
            <main style={{ padding: "16px" }}>
                {/* Render the matched child route component here */}
                <Outlet />
            </main>
        </div>
    );
}