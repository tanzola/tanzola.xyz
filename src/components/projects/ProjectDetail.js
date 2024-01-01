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
    let maxVidWidth = 1080;  // ##HC
    let maxDetailPad = 25;  // ##HC

    const width = useWindowWidth();
    let clampedwidth = clamp(maxVidWidth, 0, width);
    let detailPad = clamp((maxVidWidth - width + maxDetailPad * 4) / 4, 0, maxDetailPad);

    const detail = details[match.params.name];
    const imgSource = "/projects/" + detail.name + "/thumb.png";
    const heroImage = <img
        className="hero"
        src={imgSource}
        alt={detail.title}
        style={{ width: clampedwidth + 'px', paddingTop: maxDetailPad - detailPad + 'px' }}
    />
    const heroVimeo = <iframe
        className="hero"
        style={{ boxSizing: "content-box", paddingTop: ((maxDetailPad - detailPad) * 1.5) + 'px' }}
        src={"https://player.vimeo.com/video/" + detail.vimeo}
        width={"100%"}
        height={clampedwidth / 16 * 9}
        frameBorder="0"
        allowFullScreen
        title={detail.title}
    />

    const hero = detail.vimeo.length ? heroVimeo : heroImage;

    const downloadLinks = detail.files.map(file => (
        <div key={file.key}>
            <p className="pd-file-dl"><a href={"/projects/" + detail.name + "/download/" + file.name} download={file.name}>{file.name}</a></p>
            <p className="pd-file-desc">{file.desc}</p>
        </div>
    ));

    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => { setToggleState(index); };

    return (
        <>
            <div className="hero-container">{hero}</div>
            <div className="detail-container" style={{ width: clampedwidth + 'px', paddingLeft: detailPad+ 'px', paddingRight: detailPad+ 'px' }}>
                <div><h1 className="title-project">{detail.title}</h1></div>
                <div className="pd-separator">
                    {downloadLinks.length
                        ? <div className="pd-tab-buttons">
                            <button className={toggleState === 2 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(2)}>Info</button>
                            <button className={toggleState === 1 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(1)}>Files</button>
                        </div>
                        : <div style={{ height: 21 + 'px' }}></div>}  {/*##HC*/}
                </div>
                <div className="pd-tab-content">
                    <div className={toggleState === 1 ? "pd-content pd-active-content" : "pd-content"}>{downloadLinks}</div>
                    <div className={toggleState === 2 ? "pd-content pd-active-content" : "pd-content"}><p>{detail.desc}</p></div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetail;
