import React, { useEffect, useState } from 'react';
import { details } from './data/details.js';
// import Vimeo from '@u-wave/react-vimeo';
import './ProjectDetail.css';

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function useWindowWidth() {
    const [width, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => { setSize(window.innerWidth); }
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []);
    return width;
}

function ProjectDetail({ match }) {
    let maxVidWidth = 900;  // ##HC
    let maxDetailPad = 15;  // ##HC

    const width = useWindowWidth();
    let clampedwidth = clamp(maxVidWidth, 0, width);
    let detailPad= clamp((maxVidWidth - width + maxDetailPad * 4) / 4, 0, maxDetailPad);

    const detail = details[match.params.name];
    const img_src = "/projects/" + detail.name + "/thumb.png";
    const hero_img = <img
        className="hero"
        src={img_src}
        alt={detail.title}
        style={{ width: clampedwidth + 'px', paddingTop: maxDetailPad - detailPad + 'px' }}
    />
    const hero_vimeo = <iframe
        className="hero"
        style={{ boxSizing: "content-box", paddingTop: ((maxDetailPad - detailPad) * 1.5) + 'px' }}
        src={"https://player.vimeo.com/video/" + detail.vimeo}
        width={"100%"}
        height={clampedwidth / 16 * 9}
        frameBorder="0"
        allowFullScreen
        title={detail.title}
    />

    const hero = detail.vimeo.length ? hero_vimeo : hero_img;

    const download_links = detail.downloads.map(element => (
        <p key={element}><a href={"/projects/" + detail.name + "/download/" + element} download>{element}</a></p>
    ));

    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => { setToggleState(index); };

    return (
        <>
            <div className="hero_container">{hero}</div>
            <div className="detail_container" style={{ width: clampedwidth + 'px', paddingLeft: detailPad+ 'px', paddingRight: detailPad+ 'px' }}>
                <div><h1 className="title_project">{detail.title}</h1></div>
                <div className="separator">
                    {download_links.length
                        ? <div className="tabs_container">
                            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Files</button>
                            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Info</button>
                        </div>
                        : <div style={{ height: 21 + 'px' }}></div>}  {/*##HC*/}
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>{download_links}</div>
                    <div className={toggleState === 2 ? "content active-content" : "content"}><p>{detail.desc}</p></div>
                </div>
                <div style={{ height: "40px" }}></div>
            </div>
        </>
    )
}

export default ProjectDetail;
