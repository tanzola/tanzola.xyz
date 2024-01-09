"use client";
import { useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";
import Link from 'next/link'
import styles from './Navbar.module.css';

const links = [
    { name: "Reel", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
];

function Navbar() {

    const navbarLinks = links.map((link) => (
        <div key={link.name}>
            <Link href={link.path} scroll={false} className={styles.navbarItem}>{link.name}</Link>
        </div>
    ));

    const [scrollPosY, setScrollPos] = useState(null);
    useEffect(() => {
        const updateScrollPos = () => { setScrollPos(window.scrollY); }
        updateScrollPos();
        window.addEventListener("scroll", updateScrollPos);
    });

    return ( 
        <header className={`${styles.navHeader} ${scrollPosY > 25 ? styles.navbarUnderline : styles.navbarUnderlineInactive}`}>
            <h1 className={styles.navName}>Robert Tanzola</h1>
            <ul className={styles.navbarList}>{navbarLinks}</ul>
        </header>
    );
}

export default Navbar;
