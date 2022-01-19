import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/meteo">
                    <li>Meteo</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;