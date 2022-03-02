import React from 'react';
import ThumbLink from './ThumbLink.js';
import './Projects.css';

const projects = [  // details.js
	{ name: "Project-A" },
	{ name: "Project-B" },
	{ name: "Project-C" },
	{ name: "Project-D" },
	{ name: "Project-E" },
	{ name: "Project-F" },
];

function Projects() {
	return (
		<>
			<section className="thumb_section">
				{projects.map(project => (
					<ThumbLink name={project.name} key={project.name} />
				))}
			</section>
		</>
	);
}

export default Projects;
