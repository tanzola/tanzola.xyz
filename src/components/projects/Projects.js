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
			<div className="wrapper_h_projects underline">
				<h1 className="h_projects slideInLeft">Projects</h1>
			</div>
			<section className="proj-grid-wrapper">
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
