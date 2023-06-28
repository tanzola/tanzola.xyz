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

    const [scrollPosY, setScrollPos] = React.useState(window.scrollY);
    window.addEventListener("scroll", (e) => setScrollPos(window.scrollY));

    let bgColor = document.body.style.backgroundColor;
    console.log(bgColor.toString());

    return (
        <>
            <header className={"nav-header " + (scrollPosY > 30 ? " navbar-underline" : "navbar-underline-inactive")}>
                {/* <img src="/images/rt.png" alt="RT" className="logo"></img> */}
                <svg viewBox="0 0 482.86 412.68" className='logo' alt="RT">
                    <path d="M105.54,156.49c-4.09,0-7.77,2.49-9.29,6.3L.51,402.97c-.88,2.22-.61,4.62,.75,6.59s3.63,3,5.98,3.01l68.62,.11h.15c36.39,0,68.69-21.78,82.32-55.53l81.11-200.64H105.54Z"/>
                    <path d="M108.35,132H372.99c36.38,0,68.69-21.79,82.32-55.52l27.02-66.85c.89-2.19,.64-4.58-.69-6.54-1.32-1.96-3.44-3.09-5.8-3.09H221.06c-36.61,0-69,21.98-82.52,56.01l-30.19,75.99Z"/>
                </svg>
                {/* <p style={{justifySelf: "center", paddingLeft: "20px"}}>Robert Tanzola</p> */}
                <ul className="navbar-list">{navbarLinks}</ul>
            </header>
        </>
    );
}

export default Navbar;
