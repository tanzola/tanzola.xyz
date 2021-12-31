import React, { useEffect, useState } from 'react';
import useScrollbarSize from 'react-scrollbar-size';
import ThumbLink from './ThumbLink.js';
import './Projects.css';

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

const projects = [  // details.js
	{ name: "Project-A" },
	{ name: "Project-B" },
	{ name: "Project-C" },
	{ name: "Project-D" },
	{ name: "Project-E" },
	{ name: "Project-F" },
];

function Projects() {
	const width = useWindowWidth();
	const sw = useScrollbarSize()['width'];  // not dynamic - custom scrollbar?
	const thumb_width = width > 560 ? clamp(width / 2 - sw / 2, 0, 540) : width - sw;  // ##HC
	return (
		<>
			<section className="thumb_section">
				{projects.map(project => (<ThumbLink name={project.name} width={thumb_width} key={project.name} />))}
			</section>
		</>
	);
}

export default Projects;
