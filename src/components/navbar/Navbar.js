import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
];

function Navbar() {
    
    const navbarLinks = links.map((link) => (
        <div key={link.name} className="navbar-item">
            <NavLink to={link.path}>
                {link.name}
            </NavLink>
        </div>
    ));

    return (
        <>
            <header className="nav-header">
                <img src="/images/rt.png" alt="RT"></img>
                <ul className="navbar-list">{navbarLinks}</ul>
            </header>
        </>
    );
}

export default Navbar;
