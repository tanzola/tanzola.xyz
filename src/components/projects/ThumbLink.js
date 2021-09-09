import { Link } from 'react-router-dom';
import { details } from './data/details.js';
import './ThumbLink.css';

function ThumbLink(props) {
    const detail = details[props.name];
    const img_src = "/projects/" + detail.title + "/thumb.png";
    return (
        <Link to={`/projects/${props.name}`}>
            <div className="thumb_container">
                <img className="thumb_img" src={img_src} alt={detail.title} style={{ width: props.width + 'px' }} />
                <div className="overlay-full" style={{ width: props.width + 'px' }}>
                    <div className="thumb_text">
                        <p style={{ fontSize: props.width / 13 + 'px' }}>{detail.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ThumbLink;
