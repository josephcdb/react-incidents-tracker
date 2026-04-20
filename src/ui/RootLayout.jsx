import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import "../css/layout.css";
import "../css/ticket.css";

export function RootLayout() {
    return (
        <div>
            {/* Header and Navigation for all pages */}
            <Header />
            {/* Main content area where child routes will be rendered */}
            <main>
                {/* Render the matched child route component here */}
                <Outlet />
            </main>
        </div>
    );
}