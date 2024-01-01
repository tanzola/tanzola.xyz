import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

const links = [
    { name: "linkedIn", path: "https://www.linkedin.com/in/robert-tanzola/" },
    { name: "vimeo", path: "https://vimeo.com/tanzola" },
    { name: "instagram", path: "https://instagram.com/tanzola" },
    { name: "github", path: "https://github.com/tanzola" }
];

function Navbar(props) {
    //  onClick={() => { props.setPageState(link.path) }}
    const footerLinks = links.map((link) => (
        <div key={link.name}>
            <NavLink to={{pathname: link.path}} target="_blank" className="footer-item">
                {link.name}
            </NavLink>
        </div>
    ));

    return (
        <footer className={"footer-nav"}>
            {/* <img src="/images/rt.png" alt="RT" className="logo"></img> */}
            {/* <p style={{justifySelf: "center", paddingLeft: "20px"}}>Robert Tanzola</p> */}
            <ul className="footer-list">{footerLinks}</ul>
        </footer>
    );
}

export default Navbar;
