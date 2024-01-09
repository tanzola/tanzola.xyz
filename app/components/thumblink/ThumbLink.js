"use client";
import Link from 'next/link'
import { details } from '../../projects/\[projectDetails\]/data/details.js';
import './ThumbLink.css';

function ThumbLink(props) {
    const detail = details[props.project.name];
    const img_src = "/projects/" + detail.name + "/thumb.png";
    return (
        <Link href={`/projects/${detail.name}`} className="thumb-container">
            <div className="thumb-overlay">
                <p className="thumb-overlay-text">{detail.title}</p>
            </div>
            <img className="thumb-img" src={img_src} alt={detail.title} />
        </Link>
    );
}

export default ThumbLink;
