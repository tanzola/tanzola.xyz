"use client";
import { useEffect, useState } from 'react';
import { useParams} from 'next/navigation';
import { details } from './data/details.js';
import './ProjectDetail.css';


function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function ProjectDetail() {
    const params = useParams();
    const detail = details[params.projectDetails];

    let maxVidWidth = 1280;  // #Hardcode
    let maxDetailPad = 50;  // #Hardcode

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => { setWidth(window.innerWidth); }
        // window.addEventListener('load', handleResize);
        // window.removeEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []);

    let clampedwidth = clamp(maxVidWidth, 0, width);
    let detailPad = clamp((maxVidWidth - width + maxDetailPad * 4) / 4, 0, maxDetailPad);

    const imgSource = "/projects/" + detail.name + "/thumb.png";
    const heroImage = <img
        className="hero"
        src={imgSource}
        alt={detail.title}
        style={{ width: clampedwidth + 'px', paddingTop: maxDetailPad - detailPad + 'px' }}
    />
    const heroVimeo = <iframe
        className="hero"
        style={{ boxSizing: "content-box", paddingTop: (maxDetailPad - detailPad) + 'px' }}
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
            <div className="detail-container" style={{ width: clampedwidth + 'px', paddingLeft: detailPad / 2 + 'px', paddingRight: detailPad / 2 + 'px' }}>
                <div><h1 className="title-project">{detail.title}</h1></div>
                <div>
                    {downloadLinks.length
                        ? <div className="pd-tab-buttons">
                            <div className="pd-separator-line" />
                            <button className={toggleState === 2 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(2)}>Info</button>
                            <button className={toggleState === 1 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(1)}>Files</button>
                        </div>
                        : <div className="pd-separator-line" style={{ height: 1.65 + "rem" }}></div>}  {/*#Hardcode*/}
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
