import { NavLink } from "react-router-dom";
import "../css/navigation.css";

export const Navigation = () => {    
    return (
        <nav className="navigation">
            <NavLink to="/" className="navigation-link">Incidents</NavLink>
            <NavLink to="/incidents/1" className="navigation-link">Incident Detail</NavLink>
            <NavLink to="/approvals" className="navigation-link">Approvals</NavLink>
            <NavLink to="/login" className="navigation-link">Login</NavLink>
            <NavLink to="/tickets" className="navigation-link">Tickets</NavLink>
        </nav>
    );
}