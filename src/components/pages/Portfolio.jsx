import React from 'react';
import projectData from '../../assets/data/projects.cjs';

const Portfolio = () => {
	return (
		<section>
			<div className='container relative pb-20 pt-4 lg:pt-8 lg:pb-28'>
				<div className='relative mx-auto max-w-5xl'>
					<div className='text-center'>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>My Projects</h2>
						<p className='mx-auto mt-3 max-w-2xl text-xl'>Take a look at what I've been working on lately.</p>
					</div>

					<div className='mx-auto mt-6 md:mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2'>
						{/* 
								map over projectData array and display each project and reverse the array
								so that when I add new projects they are displayed in the correct order
							*/}
						{projectData
							.slice(0)
							.reverse()
							.map((project) => (
								<div key={project.id} className='flex flex-col overflow-hidden rounded-xl shadow-lg'>
									<div className='flex-shrink-0'>
										<img className='h-56 w-full object-cover' src={project.imgSrc} alt={project.altText} />
									</div>
									<div className='flex flex-1 flex-col justify-between bg-zinc-200 p-6'>
										<div className='flex-1'>
											<span className='space-x-1'>
												{/* loop over tech array and display each tech as a badge */}
												{project.tech.map((tech) => (
													<span
														key={tech}
														className='inline-flex items-center rounded-md bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-200'
													>
														{tech}
													</span>
												))}
											</span>
											<span className='mt-2 block'>
												<p className='text-2xl font-semibold'>{project.title}</p>
												<p className='mt-3 text-base'>{project.description}</p>
											</span>
										</div>
										<div className='mt-6 flex items-center'>
											<div className='flex-shrink-0'>
												<div className='flex-col flex-wrap space-x-2'>
													{project.links.map((link) => (
														<a
															key={link.id}
															href={link.url}
															target='_blank'
															className='inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																fill='currentColor'
																className='mr-1 inline-block h-4 w-4'
																viewBox='0 0 16 16'
															>
																<path d={link.btnIcon} />
															</svg>
															<span className='mt-0.5'>{link.text}</span>
														</a>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
