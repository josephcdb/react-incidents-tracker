import { Navigation } from "./Navigation.jsx";
import "../css/header.css";
import "../css/layout.css";

export const Header = () => {    
    return (
        <header className="header">
            <h1>Incidents Tracker</h1>
            <Navigation />
        </header>
    );
}