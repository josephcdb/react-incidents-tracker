import { Navigation } from "./Navigation.jsx";

export const Header = () => {
    const headerStyle = {
        borderBottom: "1px solid #eee",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",                 
    };
    
    return (
        <header style={headerStyle}>
            <h1>Incidents Tracker</h1>
            <Navigation />
        </header>
    );
}