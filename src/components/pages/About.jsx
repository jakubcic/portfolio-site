import React from 'react';
import headshot from '../../assets/images/jakub.jpg';

const styleClasses = {
	card: 'container mt-8 flex max-w-5xl flex-col items-center justify-center rounded-xl bg-zinc-200 px-6 shadow-lg',
	heading: 'text-3xl font-bold tracking-tight sm:text-4xl mb-4 md:mb-0',
	imgHeaderSection: 'mt-6 flex flex-col items-center justify-center md:flex-row',
	headshot: 'mx-6 mb-6 h-48 w-48 rounded-full md:mb-0 md:h-32 md:w-32',
	cardBody: 'm-1 pb-6 md:m-6 md:py-2'
};

const About = () => {
	return (
		<>
			<div className={styleClasses.card}>
				<section className={styleClasses.imgHeaderSection}>
					<img
						className={styleClasses.headshot}
						src={headshot}
						alt='headshot'
					/>
					<h2 className={styleClasses.heading}>
						Hello! My name is Jakub Paweł Cichon. I'm passionate about technology.
					</h2>
				</section>
				<div className={styleClasses.cardBody} >
					<p className=''>
						I'm new to the web development world and I'm thrilled to jump in with both feet and explore all it
						has to offer! I communicate in English proficiently and in Polish at a B1 level (CEFR). I'm
						currently working as a Web Infrastructure Specialist at a banking software company in Connecticut.
						I've got a degree in Statistics from the University of Connecticut and a burning passion for
						solving problems. I have experience with supporting large distributed applications, application
						deployment, CLI tool development and incident management. I love finding ways to make my team's
						daily work more efficient. I'm constantly on the hunt for new knowledge and I like to think that
						if there were a certification for internet searching your way out of a problem, I'd have one by
						now. I'm also a huge fan of online privacy and open source software. Let's make the internet a
						better place together!
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
