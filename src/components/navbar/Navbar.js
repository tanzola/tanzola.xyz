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

    let [is_sidebar, setSidebar] = useState(false);
    if (is_sidebar && width >= min_width) { setSidebar(false); }
    function toggleSidebar() { setSidebar(!is_sidebar) };

    const navlinks = links.map((link) => (
        <NavLink to={link.path} key={link.name}>
            <li onClick={toggleSidebar}>{link.name}</li>
        </NavLink>
    ));

    let linklist = <ul>{navlinks}</ul>;
    let sidebar = <aside><ul className="sidebar">{navlinks}</ul></aside>;
    let sidebaricon = (
        <div className="sidebar-icon">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <i className="material-icons" id="menu-icon" onClick={toggleSidebar}>menu</i>
        </div>
    );

    return (
        <div>
            <header>
                <img src="/images/rt.png" alt="RT"></img>
                <nav className="navbar">
                    {width < min_width ? sidebaricon : linklist}
                </nav>
            </header>
            {is_sidebar ? sidebar : null}
        </div>
    );
}

export default Navbar;
