import { Link } from 'react-router-dom';
import { details } from './data/details.js';
import './ThumbLink.css';

function ThumbLink(props) {
    const detail = details[props.name];
    const img_src = "/projects/" + detail.name + "/thumb.png";
    return (
        <Link to={`/projects/${props.name}`}>
            <div className="thumb_container">
                <img className="thumb_img" src={img_src} alt={detail.title} />
                <div className="overlay-full">
                    <div className="thumb_text">
                        <p>{detail.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ThumbLink;
