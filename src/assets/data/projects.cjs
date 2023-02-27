import grimsImg from '../../assets/images/grims-preview.jpg';
import megaTechBlogImg from '../../assets/images/mega-tech-blog.png';
import employeeTrackerImg from '../../assets/images/employee-tracker-cli.jpg';
import socialNetworkApiImg from '../../assets/images/social-network-api.png';
import { btnIcons } from '../../utils/helpers.cjs';

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

export default projectData;