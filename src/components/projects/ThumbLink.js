import { Link } from 'react-router-dom';
import { details } from './data/details.js';
import './ThumbLink.css';

function ThumbLink(props) {
    const detail = details[props.project.name];
    const img_src = "/projects/" + detail.name + "/thumb.png";
    const anim = {};
    return (
        <Link to={`/projects/${detail.name}`} className="thumb_container">
            <div className="thumb_overlay">
                    <p className="thumb_overlay_text">{detail.title}</p>
            </div>
            <img className="thumb_img" src={img_src} alt={detail.title} />
            {/* <div className="title-container">
                <p >{detail.title}</p>
            </div> */}
        </Link>
    );
}

export default ThumbLink;
