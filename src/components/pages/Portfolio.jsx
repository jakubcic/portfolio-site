import React from 'react';
// import images from src/assets/images
import grimsImg from '../../assets/images/grims-preview.jpg';
import megaTechBlogImg from '../../assets/images/mega-tech-blog.png';
import employeeTrackerImg from '../../assets/images/employee-tracker-cli.jpg';
import socialNetworkApiImg from '../../assets/images/social-network-api.png';

const btnIcons = {
	github:
		'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
	website:
		'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z',
};

const projectData = [
	{
		id: 1,
		title: 'Employee Tracker CLI Content Management System',
		description:
			'Employee Tracker is a CLI content management system (CMS). The purpose of this tool is to manage a database of employees at your company. This application runs on Node.js and connects to a MySQL database. When you run it you will be presented with choices that include creating, reading, updating, and deleting information from the CMS. The data is displayed in a table in your terminal.',
		imgSrc: employeeTrackerImg,
		altText: 'Employee Tracker CLI tool terminal window',
		tech: ['node.js', 'MySQL', 'Inquirer.js'],
		links: [
			{
				id: 1,
				text: 'GitHub',
				url: 'https://github.com/jakubcic/employee-tracker',
				btnIcon: btnIcons.github,
			},
		],
	},
	{
		id: 2,
		title: 'Social Network API',
		description:
			'This is a RESTful API that serves as a backend for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. This application uses a NoSQL database and is built with Express.js for the server.',
		imgSrc: socialNetworkApiImg,
		altText: 'image of Social Network API being tested with Insomnia',
		tech: ['node.js', 'express.js', 'MongoDB', 'Mongoose'],
		links: [
			{
				id: 1,
				text: 'GitHub',
				url: 'https://github.com/jakubcic/social-network-api',
				btnIcon: btnIcons.github,
			},
		],
	},
	{
		id: 3,
		title: 'Mega Tech Blog',
		description:
			"Mega Tech Blog is an online micro-blogging platform focused on technical discussions relating to web developement, devops, and security. Users can create an account and post about their experiences with various technologies or their thoughts on anything tech-related. Users can also comment on other users' posts. This application is built with the MVC paradigm, uses the MEHN stack (MySQL, Express, Handlebars and Node.js), and is hosted on Heroku.",
		imgSrc: megaTechBlogImg,
		altText: 'Mega Tech Blog web application user dashboard',
		tech: ['node.js', 'express.js', 'MySQL', 'Handlebars', 'TailwindCSS'],
		links: [
			{
				id: 1,
				text: 'Website',
				url: 'https://mega-tech-blog.herokuapp.com/',
				btnIcon: btnIcons.website,
			},
			{
				id: 2,
				text: 'GitHub',
				url: 'https://github.com/jakubcic/mega-tech-blog',
				btnIcon: btnIcons.github,
			},
		],
	},
	{
		id: 4,
		title: 'G.R.I.M.S',
		description:
			'G.R.I.M.S (General Retail Inventory Management System) is an online inventory management system. Users can log in and view, add and edit or delete products. They have the ability to manage the price and current stock of individual items. This application integrates with the cloud image host Cloudinary and is hosted on Heroku.',
		imgSrc: grimsImg,
		altText: 'GRIMS web application landing page',
		tech: ['node.js', 'express.js', 'MySQL', 'Handlebars', 'Bootstrap 5'],
		links: [
			{
				id: 1,
				text: 'Website',
				url: 'https://grims-inventory.herokuapp.com/login',
				btnIcon: btnIcons.website,
			},
			{
				id: 2,
				text: 'GitHub',
				url: 'https://github.com/Eaponte24/GRIMS',
				btnIcon: btnIcons.github,
			},
		],
	},
];

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
														className='inline-flex items-center rounded-xl bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-200'
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
