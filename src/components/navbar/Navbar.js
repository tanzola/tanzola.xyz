import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function useWindowWidth() {
    const [width, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => { setSize(window.innerWidth); }
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []);
    return width;
}

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
];

function Navbar() {
    const min_width = 560;  // ##HC
    const width = useWindowWidth();

    let [isSidebar, setSidebar] = useState(false);
    if (isSidebar && width >= min_width) { setSidebar(false); }
    function toggleSidebar() {
        let sb = document.getElementById("sidebar");
        sb.style.transitionProperty = "transform, opacity";
        setSidebar(!isSidebar) 
    };
    function snapOffSidebar() {
        let sb = document.getElementById("sidebar");
        sb.style.transitionProperty = "none";
        setSidebar(false);
    }

    const navbarLinks = links.map((link) => (
        <div key={link.name} className="navbar-item">
            <NavLink to={link.path}>
                {link.name}
            </NavLink>
        </div>
    ));

    const sidebarLinks = links.map((link) => (
        <div key={link.name} className="sb-item">
            <NavLink to={link.path} onClick={snapOffSidebar}>
                {link.name}
            </NavLink>
        </div>
    ));

    let sidebar = (
        <aside id="sidebar" className={isSidebar ? "sb sb-open" : "sb sb-closed"}>
            <ul className="sb-list">{sidebarLinks}</ul>
        </aside>
    );

    return (
        <>
            <header className="nav-header">
                <img src="/images/rt.png" alt="RT"></img>
                {width > min_width
                    ? <ul className="navbar-list">{navbarLinks}</ul>
                    : <div className="sb-icon">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                        <i className="material-icons" id="menu-icon" onClick={toggleSidebar}>menu</i>
                    </div>
                }
            </header>
            {sidebar}
        </>
    );
}

export default Navbar;
