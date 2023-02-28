import React from 'react';
import resume from '../../assets/resume/Jakub_Cichon_Resume_2023.pdf';

const styles = {
	header: {
		fontFamily: 'Bebas Neue',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 20px',
		height: '80px',
		borderBottom: '1px solid #e0e0e0',
		color: '#000',
	},

	description: {
		fontFamily: 'Teko',
		color: '#000',
		textDecoration: 'none',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		backgroundColor: '#ffffff',
		padding: '10px',
		textAlign: 'center',
		borderRadius: '10px',
		listStyle: 'none',
		margin: 'auto',
	},

	download: {
		fontFamily: 'Teko',
		textDecoration: 'none',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		backgroundColor: '#ffffff',
		padding: '10px',
		textAlign: 'left',
		borderTopRightRadius: '10px',
		borderTopLeftRadius: '10px',
	},
	// align with the header
	noBullet: {
		listStyle: 'none',
	},

	h5: {
		fontFamily: 'Teko',
		color: '#000',
		textDecoration: 'none',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		backgroundColor: '#ffffff',
		padding: '10px',
		textAlign: 'center',
	},

	// reduce size of section and center the content of the page
	sectionStyle: {
		width: '50%',
		margin: 'auto',
		padding: '30px',
		paddingBottom: '100px',
		overflow: 'auto',
	},
};

const styleClasses = {
	container: 'pb-20 items-center justify-center flex-col',
	card: 'container mt-8 flex max-w-5xl flex-col items-center justify-center rounded-xl bg-zinc-200 px-6 shadow-lg',
	heading: 'text-3xl font-bold tracking-tight sm:text-4xl mt-6 items-center justify-center md:flex-row',
	cardBody: 'm-1 pb-6 md:py-2',
	listHeadings: 'text-lg font-bold tracking-tight sm:text-xl mb-4 md:mb-0',
	listStyle: 'list-disc ml-4',
	listBox: 'container flex flex-col overflow-hidden m-2',
};

const Resume = () => {
	return (
		<section className={styleClasses.container}>
			<div className={styleClasses.card}>
				<section className={styleClasses.heading}>
					<h2>Experience and Proficiencies</h2>
					<p>{''}</p>
					<a className='inline-block text-blue-800 hover:underline' href={resume} download>
						<h3 className='text-sm tracking-normal sm:text-lg'>Download Résumé</h3>
					</a>
				</section>
				<div className={styleClasses.cardBody}>
					<section className='grid grid-cols-2 content-start'>
						<div className={styleClasses.listBox}>
							<h4 className={styleClasses.listHeadings}>Front-End</h4>
							<ul className={styleClasses.listStyle}>
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Bootstrap</li>
								<li>TailwindCSS</li>
								<li>React</li>
							</ul>
						</div>
						<div className={styleClasses.listBox}>
							<h4 className={styleClasses.listHeadings}>Back-End</h4>
							<ul className={styleClasses.listStyle}>
								<li>NodeJS</li>
								<li>Express</li>
								<li>Model View Controller</li>
								<li>MERN Stack</li>
								<li>RESTful APIs</li>
								<li>GraphQL</li>
							</ul>
						</div>
						<div className={styleClasses.listBox}>
							<h4 className={styleClasses.listHeadings}>Tools</h4>
							<ul className={styleClasses.listStyle}>
								<li>git</li>
								<li>GitHub</li>
								<li>npm</li>
								<li>Homebrew (macOS)</li>
								<li>bash</li>
								<li>PowerShell</li>
							</ul>
						</div>
						<div className={styleClasses.listBox}>
							<h4 className={styleClasses.listHeadings}>Databases</h4>
							<ul className={styleClasses.listStyle}>
								<li>MySQL</li>
								<li>Sequelize ORM</li>
								<li>NoSQL (MongoDB)</li>
								<li>Mongoose ODM</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Resume;
