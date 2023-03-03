import React from 'react';

const Project = ({ project }) => {
	return (
		<>
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
		</>
	);
};

export default Project;
