"use client";
import { useEffect, useState } from 'react';
import { useParams} from 'next/navigation';
import { details } from './data/details.js';
import './ProjectDetail.css';

function ProjectDetail() {
    const params = useParams();
    const detail = details[params.projectDetails];

    const imgSource = "/projects/" + detail.name + "/thumb.png";
    const heroImage = <img
        className="pd-hero"
        src={imgSource}
        alt={detail.title}
    />
    const heroVimeo = <iframe
        className="pd-hero"
        src={"https://player.vimeo.com/video/" + detail.vimeo}
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
            <div className="pd-hero-wrapper">{hero}</div>
            <div className="pd-detail-container">
                <div><h1 className="pd-title-project">{detail.title}</h1></div>
                <div>
                    {downloadLinks.length
                        ? <div className="pd-tab-buttons">
                            <div className="pd-separator-line" />
                            <button className={toggleState === 2 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(2)}>Info</button>
                            <button className={toggleState === 1 ? "pd-tab pd-active-tab" : "pd-tab"} onClick={() => toggleTab(1)}>Files</button>
                        </div>
                        : <div className="pd-separator-line" />}
                </div>
                <div className="pd-tab-content">
                    <div className={toggleState === 1 ? "pd-content pd-active-content" : "pd-content"}>{downloadLinks}</div>
                    <div className={toggleState === 2 ? "pd-content pd-active-content" : "pd-content"}><p>{detail.desc}</p></div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
