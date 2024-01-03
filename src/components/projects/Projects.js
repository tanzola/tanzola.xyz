import React from 'react';
import ThumbLink from './ThumbLink.js';
import './Projects.css';

const projects = [  // details.js
	{ name: "recursive-growth" },
	{ name: "Project-B" },
	{ name: "Project-C" },
	{ name: "Project-D" },
	{ name: "Project-E" },
	{ name: "Project-F" },
];

function Projects() {
	return (
		<>
			<div className="headline-wrapper underline">
				<h1 className="headline">Projects</h1>
			</div>
			<section className="proj-grid-wrapper content">
				<div className="proj-grid">
					{projects.map((project, index) => (
						<ThumbLink
							index={index}
							project={project}
							name={project.title}
							key={project.name}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default Projects;
