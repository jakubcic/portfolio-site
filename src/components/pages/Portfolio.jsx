import React from 'react';
import projectData from '../../assets/data/projects.cjs';
import Project from '../Project';

const Portfolio = () => {
	return (
		<section>
			<div className='container relative pb-20 pt-4 lg:pt-8 lg:pb-28'>
				<div className='relative mx-auto max-w-5xl'>
					<div className='text-center'>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>My Projects</h2>
						<p className='mx-auto mt-3 max-w-2xl text-xl'>Take a look at what I've been working on lately.</p>
					</div>

					<div className='mx-auto mt-6 grid max-w-lg gap-5 md:mt-12 lg:max-w-none lg:grid-cols-2'>
						{/* map over projectData array and reverse the array so that when I add new projects they are displayed in the correct order (most recent added last) */}
						{projectData
							.slice(0)
							.reverse()
							.map((project) => (
								<Project key={project.id} project={project} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
