import { NavLink } from "react-router-dom";

export const Navigation = () => {
    const linkBaseStyle = {
        padding: "8px 10px",
        borderRadius: "4px",
        textDecoration: "none",
        color: "inherit"
    };

    const linkStyle = ({ isActive }) => (
        {
        ...linkBaseStyle,
        fontWeight: isActive ? "700" : "500",
        backgroundColor: isActive ? "#f2f2f2" : "transparent",
    });

    const navStyle = {
        display: "flex",
        gap: "8px",
        flexWrap: "wrap"
    };

    return (
        <nav style={navStyle}>
            <NavLink to="/" style={linkStyle}>Incidents</NavLink>
            <NavLink to="/incidents/1" style={linkStyle}>Incident Detail</NavLink>
            <NavLink to="/approvals" style={linkStyle}>Approvals</NavLink>
            <NavLink to="/login" style={linkStyle}>Login</NavLink>
            <NavLink to="/tickets" style={linkStyle}>Tickets</NavLink>
        </nav>
    );
}